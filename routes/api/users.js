const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../../models/User');
const Stylist = require("../../models/Stylist")
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');
const validateRegisterInput = require('../../validation/registerUser');
const validateLoginInput = require('../../validation/login');

router.get("/test", (req, res) => res.json({ msg: "This is the users route" }));

router.get('/current', passport.authenticate('jwt', {session: false}), (req, res) => {
  res.json({
    id: req.user.id,
    handle: req.user.handle,
    email: req.user.email
  });
})

// fetch all users for testing
router.get(
  "/",
  (req, res) => {
    User.find()
      .then(users => res.json(users))
  }
)

router.get(
  "/:id", (req, res) => {
    User.findById(req.params.id)
      .then(user => res.json(user))
  }
)

router.post("/register", (req, res) => {

  const { errors, isValid } = validateRegisterInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      errors.email = "Email has already been registered";
      return res.status(400).json(errors);
    } else {
      User.findOne({ handle: req.body.handle }).then(user => {
        if (user) {
          errors.handle = "Handle has already been taken";
          return res.status(400).json(errors);
        }
      })
      const newUser = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        handle: req.body.handle,
        email: req.body.email,
        password: req.body.password,
        profileType: req.body.profileType,
        imageUrl: "/api/images/cutabove-1634449093367.png"
      });

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => {
              const payload = { id: user.id, handle: user.handle };

              jwt.sign(payload, keys.secretOrKey, { expiresIn: 3600 }, (err, token) => {
                res.json({
                  success: true,
                  token: "Bearer " + token
                });
              });
            })
            .catch(err => console.log(err));
        });
      });
    }
  });
});

router.post("/login", (req, res) => {

  const { errors, isValid } = validateLoginInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  User.findOne({ email }).then(user => {
    if (!user) {
      errors.email = "This user does not exist";
      return res.status(400).json(errors);
    } else 

    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        const payload = { imageUrl: user.imageUrl, id: user.id, email: user.email, firstName: user.firstName, lastName: user.lastName, handle: user.handle };

        jwt.sign(payload, keys.secretOrKey, { expiresIn: 3600 }, (err, token) => {
          res.json({
            success: true,
            token: "Bearer " + token
          });
        });
      } else {
        errors.password = "Incorrect password";
        return res.status(400).json(errors);
      }
    });
  });
});

router.patch(
  "/:id",
  // passport.authenticate('jwt', { session: false }),
  (req, res) => {

    User.findByIdAndUpdate((req.params.id), req.body, { new: true })
      .then(user => res.json(user))
      .catch(err => res.status(404).json({ nouserfound: "No user found by that Id" }))
  }
)

module.exports = router;
const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const Stylist = require('../../models/Stylist');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');
const validateRegisterInput = require('../../validation/registerStylist');
const validateLoginInput = require('../../validation/login');

router.get("/test", (req, res) => res.json({ msg: "This is the users route" }));

router.get('/current', passport.authenticate('jwt', {session: false}), (req, res) => {
  res.json({
    id: req.stylist.id,
    handle: req.stylist.handle,
    email: req.stylist.email
  });
})

// fetch all stylists
router.get(
  "/",
  (req, res) => {
    Stylist.find()
      .then(stylists => res.json(stylists))
  }
)

router.get(
  "/:id",
  (req, res) => {
    Stylist.findById(req.params.id)
      .then(stylist => res.json(stylist))
      .catch(err => res.status(404).json({ nostylistfound: 'No stylist found with that ID' }));
  }
)

router.post("/register", (req, res) => {

  const { errors, isValid } = validateRegisterInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  Stylist.findOne({ email: req.body.email }).then(stylist => {
    if (stylist) {
      errors.email = "Email has already been registered";
      return res.status(400).json(errors);
    } else {
      Stylist.findOne({ handle: req.body.handle }).then(stylist => {
        if (stylist) {
          errors.handle = "Handle has already been taken";
          return res.status(400).json(errors);
        }
      })
      const newStylist = new Stylist({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        handle: req.body.handle,
        email: req.body.email,
        password: req.body.password,
        profileType: req.body.profileType,
        phoneNumber: req.body.phoneNumber,
        address: req.body.address,
        averageRating: req.body.averageRating,
        imageUrl: "/api/images/cutabove-1634449093367.png"
      });

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newStylist.password, salt, (err, hash) => {
          if (err) throw err;
          newStylist.password = hash;
          newStylist
            .save()
            .then(stylist => {
              const payload = { id: stylist.id, handle: stylist.handle };

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

  Stylist.findOne({ email }).then(stylist => {
    if (!stylist) {
      errors.email = "This stylist does not exist";
      return res.status(400).json(errors);
    }

    bcrypt.compare(password, stylist.password).then(isMatch => {
      if (isMatch) {
        const payload = { id: stylist.id, email: stylist.email };

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

    Stylist.findByIdAndUpdate((req.params.id), req.body, { new: true })
      .then(stylist => res.json(stylist))
      .catch(err => res.status(404).json({ nostylistfound: "No stylist found by that Id" }))
  }
)

module.exports = router;
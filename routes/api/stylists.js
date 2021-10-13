const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const Stylist = require('../../models/User');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');
const validateRegisterInput = require('../../validation/registerStylist');

router.get("/test", (req, res) => res.json({ msg: "This is the users route" }));

router.get('/current', passport.authenticate('jwt', {session: false}), (req, res) => {
  res.json({
    id: req.stylist.id,
    handle: req.stylist.handle,
    email: req.stylist.email
  });
})

// fetch all stylists for testing
router.get(
  "/",
  (req, res) => {
    Stylist.find()
      .then(stylists => res.json(stylists))
  }
)

router.post("/register", (req, res) => {

  const { errors, isValid } = validateRegisterInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  Stylist.findOne({ handle: req.body.handle }).then(stylist => {
    if (stylist) {
      errors.handle = "Stylist already exists";
      return res.status(400).json(errors);
    } else {
      const newStylist = new Stylist({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        handle: req.body.handle,
        email: req.body.email,
        password: req.body.password,
        profileType: req.body.profileType,
        phoneNumber: req.body.phoneNumber,
        address: req.body.address,
        averageRating: req.body.averageRating
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

// router.post("/login", (req, res) => {

//   const { errors, isValid } = validateLoginInput(req.body);

//   if (!isValid) {
//     return res.status(400).json(errors);
//   }

//   const email = req.body.email;
//   const password = req.body.password;

//   Stylist.findOne({ email }).then(stylist => {
//     if (!stylist) {
//       errors.email = "This stylist does not exist";
//       return res.status(400).json(errors);
//     }

//     bcrypt.compare(password, stylist.password).then(isMatch => {
//       if (isMatch) {
//         const payload = { id: stylist.id, email: stylist.email };

//         jwt.sign(payload, keys.secretOrKey, { expiresIn: 3600 }, (err, token) => {
//           res.json({
//             success: true,
//             token: "Bearer " + token
//           });
//         });
//       } else {
//         errors.password = "Incorrect password";
//         return res.status(400).json(errors);
//       }
//     });
//   });
// });


module.exports = router;
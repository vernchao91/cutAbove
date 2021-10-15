const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require('passport');
const multer = require('multer');
const Image = require("../../models/Image");
const validateImage = require("../../validation/image")

const uploadMulter = require("../../middlewares/upload")

// app.get('/', (req, res) => {
//   imgModel.find({}, (err, items) => {
//       if (err) {
//           console.log(err);
//           res.status(500).send('An error occurred', err);
//       }
//       else {
//           res.render('imagesPage', { items: items });
//       }
//   });
// });

router.post(
  "/",
  uploadMulter,
  (req, res) => {

    // validate image is sending back the whole req, not req.body
    const { errors, isValid } = validateImage(req);
    if (!isValid) {
      return res.status(400).json(errors)
    }

    const newImage = new Image({
      name: req.body.name,
      imagePath: req.file.path
    });
    newImage.save()
      .then(json => res.json(json))
  }
)

module.exports = router
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require('passport');
const multer = require('multer');
const upload = multer({dest: "uploads/"})
const Image = require("../../models/Image");
const fs = require("fs");
const util = require("util");
const unlinkFile = util.promisify(fs.unlink)
const validateImage = require("../../validation/image")
const { uploadFile, getFileStream } = require("../../s3")
const uploadMulter = require("../../middlewares/upload")

router.get(
  '/:key', 
  (req, res) => {
  const key = req.params.key;
  const readStream = getFileStream(key);

  readStream.pipe(res);
})

router.post(
  "/",
  uploadMulter,
  // upload.single("image"),
  async (req, res) => {
    console.log(req.file)

    // apply filter
    // resize

    const result = await uploadFile(req.file)
    await unlinkFile(req.file.path);
    console.log(result)
    res.send({imagePath: `/${result.Key}`})

    // validate image is sending back the whole req, not req.body
    // const { errors, isValid } = validateImage(req);
    // if (!isValid) {
    //   return res.status(400).json(errors)
    // }

    // const newImage = new Image({
    //   name: req.body.name,
    //   imagePath: req.file.path
    // });
    // newImage.save()
    //   .then(json => res.json(json))
  }
)

module.exports = router
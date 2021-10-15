const Validator = require('validator');
const validText = require('./valid-text');
const fs = require("fs");

module.exports = function validateImage(data) {
  let errors = {};

  data.body.name = validText(data.body.name) ? data.body.name : "";

  if (typeof (data.file) === "undefined") {
    errors.file = "Problem with sending data"
  }

  if (typeof (data.body) === "undefined") {
    errors.body = "Problem with sending data"
  }

  if (!(data.file.mimetype).includes("jpg")
    && !(data.file.mimetype).includes("png")
    && !(data.file.mimetype).includes("jpeg")
    && !(data.file.mimetype).includes("svg")) {
      fs.unlinkSync(data.file.path)
      errors.file = "File not supported"
    }


  if (data.file.mimetype === "undefined") {
    errors.file = "Problem with sending data"
  }

  if (data.file.size > 1024 * 1024) {
    fs.unlinkSync(data.file.path)
    errors.file = "File size too large"
  }

  if (Validator.isEmpty(data.body.name)) {
    errors.name = "Name field required"
  }

  if (Validator.isEmpty(data.file.path)) {
    errors.file = "File required"
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  }
}
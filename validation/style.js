const Validator = require("validator");
const validText = require("./valid-text");
// const validNum = require("./valid-num");

module.exports = function validateStyle(data) {
  let errors = {};

  data.stylistId = validText(data.stylistId) ? data.stylistId : "";
  data.styleType = validText(data.styleType) ? data.styleType : "";
  data.description = validText(data.description) ? data.description : "";
  data.price = validText(data.price) ? data.price : "";

  if (Validator.isEmpty(data.styleType)) {
    errors.styleType = "Style type field required"
  };

  if (Validator.isEmpty(data.description)) {
    errors.description = "Descripion field required"
  };

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};
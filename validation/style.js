const Validator = require("validator");
const validText = require("./valid-text");
// const validNum = require("./valid-num");

module.exports = function validateReview(data) {
  let errors = {};

  data.styleType = validText(data.styleType) ? data.styleType : "";
  data.description = validText(data.description) ? data.description : "";
  data.price = validText(data.price) ? data.price : "";
  data.stylistId = validText(data.stylistId) ? data.stylistId : "";

  if (Validator.isEmpty(data.styleType)) {
    errors.styleType = "Style type field required"
  };

  if (Validator.isEmpty(data.description)) {
    errors.description = "Descripion field required"
  };

  if (Validator)


  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};
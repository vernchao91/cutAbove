const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateReview(data) {
  let errors = {};

  // data.reviewerId = validText(data.reviewer) ? data.reviewerId : "";
  // data.stylistId = validText(data.stylistId) ? data.stylistId : "";
  data.title = validText(data.title) ? data.title : "";
  data.body = validText(data.body) ? data.body : "";
  data.rating = validText(data.rating) ? data.rating : "";

  if (Validator.isEmpty(data.title)) {
    errors.title = "Title field required"
  };

  if (Validator.isEmpty(data.body)) {
    errors.body = "body field required"
  };

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
}
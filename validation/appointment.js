const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateAppointment(data) {
  let errors = {};

  data.clientId = validText(data.reviewer) ? data.clientId : "";
  data.stylistId = validText(data.stylistId) ? data.stylistId : "";
  data.styleId = validText(data.styleId) ? data.styleId : "";
  data.timeFrame = validText(data.timeFrame) ? data.timeFrame : "";

  if (Validator.isEmpty(data.timeFrame)) {
    errors.timeFrame = "Time frame field required"
  };

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
}
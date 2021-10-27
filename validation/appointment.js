const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateAppointment(data) {
  let errors = {};

  data.timeFrame = validText(data.timeFrame) ? data.timeFrame : "";
  if (Validator.isEmpty(data.date)) {
    errors.timeFrame = "Date field required"
  };
  if (Validator.isEmpty(data.timeFrame)) {
    errors.timeFrame = "Time frame field required"
  };
  if (Validator.isEmpty(data.stylistName)) {
    errors.stylistName = "Stylist name required"
  };
  if (Validator.isEmpty(data.clientName)) {
    errors.clientName = "Client name required"
  };


  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
}
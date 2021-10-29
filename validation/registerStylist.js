const Validator = require('validator');
const validText = require('./valid-text');
const validPhoneNum = require('./valid_phone_num');

module.exports = function validateRegisterInput(data) {
  let errors = {};

  data.handle = validText(data.handle) ? data.handle : '';
  data.firstName = validText(data.firstName) ? data.firstName : '';
  data.lastName = validText(data.lastName) ? data.lastName : '';
  data.email = validText(data.email) ? data.email : '';
  data.password = validText(data.password) ? data.password : '';
  data.password2 = validText(data.password2) ? data.password2 : '';
  data.phoneNumber = validPhoneNum(data.phoneNumber) ? data.phoneNumber : '';
  data.address = validText(data.address) ? data.address : '';
  // data.phoneNumber = validNum(data.phoneNumber) ? data.phoneNumber : '';

  if (!Validator.isLength(data.handle, { min: 2, max: 30 })) {
    errors.handle = 'Handle must be between 2 and 30 characters';
  }

  if (Validator.isEmpty(data.handle)) {
    errors.handle = 'Handle field is required';
  }

  if (Validator.isEmpty(data.firstName)) {
    errors.firstName = 'First Name field is required';
  }

  if (Validator.isEmpty(data.lastName)) {
    errors.lastName = 'Last Name field is required';
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = 'Email field is required';
  }

  if (!Validator.isEmail(data.email)) {
    errors.email = 'Email is invalid';
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = 'Password field is required';
  }

  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = 'Password must be at least 6 characters';
  }

  if (Validator.isEmpty(data.password2)) {
    errors.password2 = 'Confirm Password field is required';
  }

  if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = 'Passwords must match';
  }
  if(!validPhoneNum(data.phoneNumber)) {
    errors.phoneNumber = "Invalid phone number"
  }

  if (Validator.isEmpty(data.address)) {
    errors.address = "Address field is required"
  }

  // if (Validator.isEmpty(data.phoneNumber)) {
  //   errors.phoneNumber = "Phone Number field is required"
  // }

  // if (!Validator.isLength(data.phoneNumber, { min: 10, max: 10 })) {
  //   errors.phoneNumber = 'Phone Number is invalid';
  // }


  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};
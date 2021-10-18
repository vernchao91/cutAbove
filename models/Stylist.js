const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StylistSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
    lastName: {
    type: String,
    required: true
  },
  handle: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  profileType: {
    type: Boolean,
    // required: true
  },
  phoneNumber: {
    type: String, 
    required: false
  },
  address: {
    type: String, 
    required: false
  },
  averageRating: {
    type: Number,
    required: false
  },
  imageUrl: {
    type: String,
    required: false,
  }
}, {
  timestamps: true
});

module.exports = Stylist = mongoose.model('Stylist', StylistSchema);
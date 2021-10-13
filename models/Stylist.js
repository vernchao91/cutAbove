const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const UserSchema = require("./User")

// function extendSchema (Schema, definition, options) {
//   return new mongoose.Schema(
//     Object.assign({}, Schema.obj, definition),
//     options
//   );
// }

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
  }
}, {
  timestamps: true
})

// const StylistSchema = extendSchema(UserSchema, {
//   phoneNumber: {
//     type: String, 
//     required: false
//   },
//   address: {
//     type: String, 
//     required: false
//   },
//   averageRating: {
//     type: Number,
//     required: false
//   }
// });

module.exports = Stylist = mongoose.model('Stylist', StylistSchema);
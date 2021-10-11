const mongoose = require('mongoose');
// const extendSchema = require('mongoose-extend-schema');
const Schema = mongoose.Schema;

// function extendSchema (Schema, definition, options) {
//   return new mongoose.Schema(
//     Object.assign({}, Schema.obj, definition),
//     options
//   );
// }

const UserSchema = new Schema({
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
    required: true
  }
}, {
  timestamps: true
})

// const StylistSchema = extendSchema(UserSchema, {
//   phone: {type: String, required: true}
// });

module.exports = User = mongoose.model('User', UserSchema);
// module.exports = Stylist = mongoose.model('Stylist', StylistSchema);
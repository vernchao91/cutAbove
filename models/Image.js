const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ImageSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  imagePath: {
    type: String,
    trim: true,
    required: true
  },
  desc: {
    type: String,
    // required: false,
  },
}, { 
  timestamps: true 
});

module.exports = Image = mongoose.model('Image', ImageSchema);
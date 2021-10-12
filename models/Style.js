const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StyleSchema = new Schema ({
    style_type: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: false
    }

})

module.exports = Style = mongoose.model('Style', StyleSchema);
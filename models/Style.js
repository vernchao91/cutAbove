const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StyleSchema = new Schema ({
    styleType: {
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
    },
    stylistId: {
        type: Schema.Types.ObjectId,
        ref: "stylists",
        require: false
    }

})

module.exports = Style = mongoose.model('Style', StyleSchema);
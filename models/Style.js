const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StyleSchema = new Schema ({
    stylistId: {
        type: Schema.Types.ObjectId,
        ref: "stylists",
        // require: false
    },
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
    }
}, {
    timestamps: true
});

module.exports = Style = mongoose.model('Style', StyleSchema);
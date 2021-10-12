const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AppointmentSchema = new Schema({
    client_id: {
        type: Schema.Types.ObjectId,
        ref: "users",
        required: false 
    },
    stylist_id: {
        type: Schema.Types.ObjectId,
        ref: "stylists",
        required: false 
    },
    time_frame: {
        type: String,
        required: false
    },
    style_id: {
        type: Schema.Types.ObjectId,
        ref: "styles",
        required: false 
    }
})

module.exports = Appointment = mongoose.model('Appointment', AppointmentSchema);
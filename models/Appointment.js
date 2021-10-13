const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AppointmentSchema = new Schema({
    clientId: {
        type: Schema.Types.ObjectId,
        ref: "users",
        required: false 
    },
    stylistId: {
        type: Schema.Types.ObjectId,
        ref: "stylists",
        required: false 
    },
    timeFrame: {
        type: String,
        required: false
    },
    styleId: {
        type: Schema.Types.ObjectId,
        ref: "styles",
        required: false 
    }
})

module.exports = Appointment = mongoose.model('Appointment', AppointmentSchema);
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AppointmentSchema = new Schema({
    clientId: {
        type: Schema.Types.ObjectId,
        ref: "users",
        // required: false 
    },

    clientName: {
      type: String,
      required: true
    },

    stylistId: {
        type: Schema.Types.ObjectId,
        ref: "stylists",
        // required: false 
    },

    stylistName: {
      type: String,
      required: true
    },

    handle: {
      type: String, 
      required: true
    },

    styleId: {
        type: Schema.Types.ObjectId,
        ref: "styles",
        // required: false 
    },

    timeFrame: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        // required: false
    },
    message: {
        type: String,
    }
}, {
    timestamps: true
});

module.exports = Appointment = mongoose.model('Appointment', AppointmentSchema);
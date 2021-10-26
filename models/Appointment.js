const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AppointmentSchema = new Schema({
    date: {
        type: Date,
        required: true
    },
    clientId: {
        type: Schema.Types.ObjectId,
        ref: "users",
    },
    clientName: {
      type: String,
      required: true
    },
    stylistId: {
        type: Schema.Types.ObjectId,
        ref: "stylists",
    },
    stylistName: {
      type: String,
      required: true
    },
    stylistHandle: {
      type: String, 
    //   required: true
    },
    timeFrame: {
        type: String,
        required: true
    },
    styleId: {
        type: Schema.Types.ObjectId,
        ref: "styles",
    },
    imageUrl: {
        type: String,
    },
    message: {
        type: String,
    }
}, {
    timestamps: true
});

module.exports = Appointment = mongoose.model('Appointment', AppointmentSchema);
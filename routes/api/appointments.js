const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require('passport');
const Appointment = require("../../models/Appointment");
const validateAppointment = require("../../validation/appointment")


// fetch all appointments for testing

router.get(
  "/",
  (req, res) => {
    Appointment.find()
      .then(appointments => res.json(appointments))
      .catch(err => res.status(404).json({ noappointmentsfound: "No appointments found" }));
  }
)

// fetch all appointments for current user

router.get(
  "/client/:clientId",
  (req, res) => {
    Appointment.find({clientId: req.params.clientId})
      .then(appointments => res.json(appointments))
      .catch(err => res.status(404).json({ noappointmentsfound: "No appointments found" }));
  }
)

// fetch all appointments for current stylist

router.get(
    "/stylist/:stylistId",
    (req, res) => {
      Appointment.find({stylistId: req.params.stylistId})
        .then(appointments => res.json(appointments))
        .catch(err => res.status(404).json({ noappointmentsfound: "No appointments found" }));
    }
)

// fetch one appointment by id

router.get(
  "/:id",
  (req, res) => {
    Appointment.findById(req.params.id)
      .then(appointment => res.json(appointment))
      .catch(err => res.status(404).json({ noappointmentfound: "No appointment found" }));
  }
)

router.post(
  "/:stylistId",
  // passport.authenticate('jwt', { session: false }),
  (req, res) => {

    const { errors, isValid } = validateAppointment(req.body)
    if (!isValid) {
      return res.status(400).json(errors)
    }

    Appointment.findOne({ timeFrame: req.body.timeFrame, date: req.body.date, stylistId: req.body.stylistId})
      .then(appointment => {
        if (appointment) {
          errors.timeFrame = "Please book another time frame"
          return res.status(400).json(errors)
        } else {
          const newAppointment = new Appointment({
            date: req.body.date,
            clientId: req.body.clientId,
            clientName: req.body.clientName,
            stylistId: req.params.stylistId,
            stylistName: req.body.stylistName,
            stylistHandle: req.body.stylistHandle,
            timeFrame: req.body.timeFrame,
            styleId: req.body.styleId,
            imageUrl: req.body.imageUrl
          })
          newAppointment.save()
            .then(appointment => res.json(appointment))
        }
      })
  }
)

router.patch(
  "/:appointmentId",
  // passport.authenticate('jwt', { session: false }),
  (req, res) => {

    // const { errors, isValid } = validateAppointment(req.body)
    // if (!isValid) {
    //   return res.status(400).json(errors)
    // }

    Appointment.findByIdAndUpdate(req.params.appointmentId, req.body, { new: true })
      .then(appointment => res.json(appointment))
      .catch(err => res.status(404).json({ noappointmentfound: "No appointment found by that Id" }))
  }
)

router.delete(
  "/:appointmentId",
  // passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Appointment.deleteOne({_id: req.params.appointmentId})
      .then(() => res.status(200).json({ msg: "delete successful" }))
      .catch(err => res.status(404).json({ noappointmentfound: "No appointment found by that Id" }))
  }
)


module.exports = router;

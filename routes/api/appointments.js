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
  "/user/:userId",
  (req, res) => {
    Appointment.find({clientId: req.params.userId})
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
  "/new/:stylistId",
  // passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const newAppointment = new Appointment({
      clientId: req.body.clientId,
      stylistId: req.params.stylistId,
      timeFrame: req.body.timeFrame,
      styleId: req.body.styleId
    })
    newAppointment.save()
      .then(appointment => res.json(appointment))
  }
)

router.patch(
  "/"
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

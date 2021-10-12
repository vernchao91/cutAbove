const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require('passport');
const Style = require("../../models/Style");

router.get("/test", (req, res) => res.json({ msg: "This is the cuts route 1" }));

// fetches all style
router.get(
  "/",
  (req, res) => {
    Style.find()
      .then(styles => res.json(styles))
      .catch(err => res.status(404).json({ nostylesfound: "No styles found" }));
  }
)

// fetch one style
router.get(
  "/:id",
  (req, res) => {
    Style.findById(req.params.id)
      .then(style => res.json(style))
      .catch(err => res.status(404).json({ nostylesfound: "No styles found by that Id" }))
  }
)

// need router.post
module.exports = router;
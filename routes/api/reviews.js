const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require('passport');
const Review = require("../../models/Review");
const validateReview = require("../../validation/review")

// all reviews
router.get(
  "/",
  (req, res) => {
    Review.find()
      .then(reviews => res.json(reviews))
      .catch(err => res.status(404).json({ noreviewsfound: "No review found" }));
  }
)

// fetch one review

router.get(
  "/:reviewId",
  (req, res) => {
    Review.findById(req.body.id)
      .then(review => res.json(review))
      .catch(err => res.status(404).json({ noreviewsfound: "No review found by that ID" }));
  }
)

// all reviews on stylist
router.get(
  "/:stylistId",
  (req, res) => {
    Review.find({stylist_id: req.params.stylistId})
      .then(reviews => res.json(reviews))
      .catch(err => res.status(404).json({ noreviewsfound: "No reviews found" }));
  }
)

router.post(
  "/new/:stylistId",
  // passport.authenticate('jwt', { session: false }),
  (req, res) => {

    const { errors, isValid } = validateReview(req.body)
    if (!isValid) {
      return res.status(400).json(errors)
    }

    const newReview = new Review({
      reviewer_id: req.body.reviewer_id,
      stylist_id: req.params.stylistId,
      title: req.body.title,
      body: req.body.body,
      rating: req.body.rating
    })
    newReview.save()
      .then(review => res.json(review))
  }
)

router.patch(
  "/:reviewId",
  (req, res) => {

    const { errors, isValid } = validateReview(req.body)
    if (!isValid) {
      return res.status(400).json(errors)
    }

    Review.findByIdAndUpdate(req.params.reviewId, req.body, { new: true })
      .then(review => res.json(review))
      .catch(err => res.status(404).json({ noreviewfound: "No review found by that Id" }))
  }
)

router.delete(
  "/:reviewId",
  // passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Review.deleteOne({_id: req.params.reviewId})
      .then(() => res.status(200).json({ msg: "delete successful" }))
      .catch(err => res.status(404).json({ noreviewfound: "No review found by that Id" }))
  }
)
module.exports = router;
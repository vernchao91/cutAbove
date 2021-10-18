import * as ReviewApiUtil from "../util/review_api_util";

export const RECEIVE_REVIEWS = "RECEIVE_REVIEWS";
export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const REMOVE_REVIEW = "REMOVE_REVIEW";
export const RECEIVE_REVIEW_ERRORS = "RECEIVE_REVIEW_ERRORS";
export const REMOVE_ERRORS = "REMOVE_ERRORS"

export const receiveReviews = reviews => {
  return {
    type: RECEIVE_REVIEWS,
    reviews
  }
}
export const receiveReview = review => {
  return {
    type: RECEIVE_REVIEW,
    review
  }
}
export const removeReview = reviewId => {
  return {
    type: REMOVE_REVIEW,
    reviewId
  }
}
export const receiveReviewErrors = errors => {
  return {
    type: RECEIVE_REVIEW_ERRORS,
    errors
  }
}
export const removeErrors = () => {
  return {
    type: REMOVE_ERRORS,
  }
}

// fetches all reviews from stylist
export const fetchReviewsFromStylist = stylistId => dispatch => {
  return ReviewApiUtil.fetchReviewsFromStylist(stylistId)
    .then(
      reviews => dispatch(receiveReviews(reviews)),
      err => dispatch(receiveReviewErrors(err.response.data))
    )
    // .catch(err => dispatch(receiveReviewErrors(err.response.data)))
}

// fetches all reviews from user
export const fetchReviewsFromUser = reviewerId => dispatch => {
  return ReviewApiUtil.fetchReviewsFromUser(reviewerId)
    .then(
      reviews => dispatch(receiveReviews(reviews)),
      err => dispatch(receiveReviewErrors(err.response.data))
    )
}

// fetch review
export const fetchReview = reviewId => dispatch => {
  return ReviewApiUtil.fetchReview(reviewId)
    .then(
      review => dispatch(receiveReview(review)),
      err => dispatch(receiveReviewErrors(err.response.data))
    )
    // .catch(err => dispatch(receiveReviewErrors(err.response.data)))
}

export const createReview = review => dispatch => {
  // debugger
  return ReviewApiUtil.createReview(review)
    .then(
      review => dispatch(receiveReview(review)),
      err => dispatch(receiveReviewErrors(err.response.data))
    )
    // .catch(err => dispatch(receiveReviewErrors(err.response.data)))
}

export const updateReview = review => dispatch => {
  return ReviewApiUtil.updateReview(review)
    .then(
      review => dispatch(receiveReview(review)),
      err => dispatch(receiveReviewErrors(err.response.data))
    )
    // .catch(err => dispatch(receiveReviewErrors(err.response.data)))
}

export const deleteReview = reviewId => dispatch => {
  return ReviewApiUtil.deleteReview(reviewId)
    .then(
      () => dispatch(removeReview(reviewId)),
      err => dispatch(receiveReviewErrors(err.response.data))
    )
    // .catch(err => dispatch(receiveReviewErrors(err.response.data)))
}
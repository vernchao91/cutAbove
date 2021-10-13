import axios from "axios";

// pass in stylist ID to fetch all reviews for that stylist
export const fetchReviews = (stylistId) => {
  return axios.get(`/api/reviews/${stylistId}`)
}

// pass in review ID to fetch review with that ID
export const fetchReview = (reviewId) => {
  return axios.get(`/api/reviews/${reviewId}`)
}

export const createReview = (review) => {
  return axios.post(`/api/reviews/new/${review.stylistId}`)
}

export const updateReview = (review) => {
  return axios.patch(`/api/reviews/${review.id}`)
}

export const deleteReview = (reviewId) => {
  return axios.delete(`/api/reviews/${reviewId}`)
}
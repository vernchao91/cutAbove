import axios from "axios";

// pass in stylist ID to fetch all reviews for that stylist
export const fetchReviewsFromStylist = (stylistId) => {
  return axios.get(`/api/reviews/stylist/${stylistId}`)
}

// pass in reivewer ID to fetch all reviews for that user
export const fetechReviewsFromUser = (reviewerId) => {
  return axios.get(`/api/reviews/reviewer/${reviewerId}`)
}

// pass in review ID to fetch review with that ID
export const fetchReview = (reviewId) => {
  return axios.get(`/api/reviews/${reviewId}`)
}

export const createReview = (review) => {
  return axios.post(`/api/reviews/${review.stylistId}`, review)
}

export const updateReview = (review) => {
  return axios.patch(`/api/reviews/${review.id}`, review)
}

export const deleteReview = (reviewId) => {
  return axios.delete(`/api/reviews/${reviewId}`)
}
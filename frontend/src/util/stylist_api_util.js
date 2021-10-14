import axios from "axios";

// fetch all stylists
export const fetchStylists = () => {
  return axios.get("/api/stylists")
}

// fetch one stylist
export const fetchStylist = stylistId => {
  return axios.get(`/api/stylists/${stylistId}`)
}

export const stylistSearch = query => {
  return axios.get('/api/stylists/search', query)
}
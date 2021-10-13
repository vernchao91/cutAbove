import axios from "axios";

// fetch all stylists
export const fetchStylists = () => {
  return axios.get("/api/stylists")
}

// fetch one stylist
export const fetchStylist = stylistId => {
  return axios.get(`/api/stylists/${stylistId}`)
}

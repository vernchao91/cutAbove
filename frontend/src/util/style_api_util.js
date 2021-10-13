import axios from "axios";

// fetch all styles
export const fetchStyles = () => {
  return axios.get("/api/styles")
}

// fetch all styles created from stylist
export const fetchStylesFromStylist = stylistId => {
  return axios.get(`/api/styles/stylist/${stylistId}`)
}

// pass in style ID to fetch one style
export const fetchStyle = styleId => {
  return axios.get(`/api/styles/${styleId}`)
}

export const createStyle = style => {
  return axios.post("/api/styles/", style)
}

export const updateStyle = style => {
  return axios.patch(`/api/styles/${style.id}`, style)
}

export const deleteStyle = styleId => {
  return axios.delete(`/api/styles/${styleId}`)
}
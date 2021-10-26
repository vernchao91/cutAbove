import axios from "axios";

export const fetchImage = (urlKey) => {
  return axios.get(`api/images/${urlKey}`)
}

export const uploadImage = (formData) => {
  return axios.post(`/api/images`, formData, { headers: {'Content-Type': 'multipart/form-data'}})
}
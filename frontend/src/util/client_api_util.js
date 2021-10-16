import axios from "axios"

export const fetchClient = clientId => {
  return axios.get(`/api/users/${clientId}`)
}
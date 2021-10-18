import axios from "axios"

export const fetchClient = clientId => {
  return axios.get(`/api/users/${clientId}`)
}

// update stylist
export const updateClient = client => {
  return axios.patch(`api/users/${client.id}`, client)
}
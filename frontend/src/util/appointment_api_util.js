import axios from "axios";

// pass in stylist ID to fetch all appointments with that stylist
export const fetchAppointmentsFromStylist = (stylistId) => {
  return axios.get(`/api/appointments/stylist/${stylistId}`)
}

// pass in user ID to fetch all appointments for that user
export const fetchAppointmentsFromUser = (clientId) => {
  return axios.get(`/api/appointments/client/${clientId}`)
}

export const fetchAppointment = (appointmentId) => {
  return axios.get(`/api/appointments/${appointmentId}`)
}

export const createAppointment = (appointment) => {
  return axios.post(`/api/appointments/${appointment.stylistId}`, appointment)
}

export const updateAppointment = (appointment) => {
  return axios.patch(`/api/appointments/${appointment.id}`, appointment)
}

export const deleteAppointment = (appointmentId) => {
  return axios.delete(`/api/appointments/${appointmentId}`)
}
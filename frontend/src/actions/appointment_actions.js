import * as AppointmentApiUtil from "../util/appointment_api_util"

export const RECEIVE_APPOINTMENTS = "RECEIVE_APPOINTMENTS";
export const RECEIVE_APPOINTMENT = "RECEIVE_APPOINTMENT";
export const REMOVE_APPOINTMENT = "REMOVE_APPOINTMENT";
export const CLEAR_APPOINTMENTS = "CLEAR_APPOINTMENTS";
export const RECEIVE_APPOINTMENT_ERRORS = "RECEIVE_APPOINTMENT_ERRORS";
export const REMOVE_ERRORS = "REMOVE_ERRORS"

export const receiveAppointments = appointments => {
  return {
    type: RECEIVE_APPOINTMENTS,
    appointments
  }
}
export const receiveAppointment = appointment => {
  return {
    type: RECEIVE_APPOINTMENT,
    appointment
  }
}
export const removeAppointment = appointmentId => {
  return {
    type: REMOVE_APPOINTMENT,
    appointmentId
  }
}
export const clearAppointments = () => {
  return {
    type: CLEAR_APPOINTMENTS
  }
}
export const receiveAppointmentErrors = errors => {
  return {
    type: RECEIVE_APPOINTMENT_ERRORS,
    errors
  }
}
export const removeErrors = () => {
  return {
    type: REMOVE_ERRORS,
  }
}

// fetch all appointments for stylist
export const fetchAppointmentsFromStylist = stylistId => dispatch => {
  return AppointmentApiUtil.fetchAppointmentsFromStylist(stylistId)
    .then(
      appointments => dispatch(receiveAppointments(appointments)),
      err => dispatch(receiveAppointmentErrors(err.response.data))
    )
}

// fetch all appointments for user
export const fetchAppointmentsFromUser = clientId => dispatch => {
  return AppointmentApiUtil.fetchAppointmentsFromUser(clientId)
    .then(
      appointments => dispatch(receiveAppointments(appointments)),
      err => dispatch(receiveAppointmentErrors(err.response.data))
    )
}

// fetch one appointment
export const fetchAppointment = appointmentId => dispatch => {
  return AppointmentApiUtil.fetchAppointment(appointmentId)
    .then(
      appointment => dispatch(receiveAppointment(appointment)),
      err => dispatch(receiveAppointmentErrors(err.response.data))
    )
}

export const createAppointment = appointment => dispatch => {
  return AppointmentApiUtil.createAppointment(appointment)
    .then(
      appointment => dispatch(receiveAppointment(appointment)),
      err => dispatch(receiveAppointmentErrors(err.response.data))
    )
}

export const updateAppointment = appointment => dispatch => {
  return AppointmentApiUtil.createAppointment(appointment)
    .then(
      appointment => dispatch(updateAppointment(appointment)),
      err => dispatch(receiveAppointmentErrors(err.response.data))
    )
}

export const deleteAppointment = appointmentId => dispatch => {
  return AppointmentApiUtil.deleteAppointment(appointmentId)
    .then(
      () => dispatch(removeAppointment(appointmentId)),
      err => dispatch(receiveAppointmentErrors(err.response.data))
    )
}
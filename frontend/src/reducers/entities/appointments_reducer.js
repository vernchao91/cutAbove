import {
  RECEIVE_APPOINTMENTS,
  RECEIVE_APPOINTMENT,
  REMOVE_APPOINTMENT,
} from "../../actions/appointment_actions"

const appointmentsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState)

  switch (action.type) {
    case RECEIVE_APPOINTMENTS:
      return Object.assign({}, oldState, action.appointments.data)

    case RECEIVE_APPOINTMENT:
      newState[action.appointment.id] = action.appointment.data
      return newState

    case REMOVE_APPOINTMENT:
      delete newState[action.appointmentId]
      return newState

    default:
      return oldState
  }
}

export default appointmentsReducer
import {
  RECEIVE_APPOINTMENTS,
  RECEIVE_APPOINTMENT,
  REMOVE_APPOINTMENT,
  CLEAR_APPOINTMENTS
} from "../../actions/appointment_actions"

const appointmentsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState)

  switch (action.type) {
    case RECEIVE_APPOINTMENTS:
      let updatedState = {};
      action.appointments.data.forEach((appointment) => {
        updatedState[appointment._id] = appointment;
      });
      return updatedState

    case RECEIVE_APPOINTMENT:
      newState[action.appointment._id] = action.appointment.data
      return newState

    case REMOVE_APPOINTMENT:
      
      delete newState[action.appointmentId]
      return newState

    case CLEAR_APPOINTMENTS:
      return {};

    default:
      return oldState
  }
}

export default appointmentsReducer
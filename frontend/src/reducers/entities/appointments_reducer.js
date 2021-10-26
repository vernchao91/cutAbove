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
<<<<<<< HEAD
      return Object.assign({}, oldState, action.appointments.data)

    case RECEIVE_APPOINTMENT:
      newState[action.appointment.id] = action.appointment.data
=======
      let updatedState = {};
      action.appointments.data.forEach((appointment) => {
        updatedState[appointment._id] = appointment;
      });
      return updatedState

    case RECEIVE_APPOINTMENT:
      newState[action.appointment._id] = action.appointment.data
>>>>>>> frontend
      return newState

    case REMOVE_APPOINTMENT:
      
      delete newState[action.appointmentId]
      return newState

    default:
      return oldState
  }
}

export default appointmentsReducer
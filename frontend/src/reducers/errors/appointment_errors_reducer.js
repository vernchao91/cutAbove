import { 
  RECEIVE_APPOINTMENT_ERRORS,
  REMOVE_ERRORS
} from "../../actions/appointment_actions"

const appointmentErrorsReducer = (oldState = [], action) => {
  Object.freeze(oldState);

  switch(action.type) {
    case RECEIVE_APPOINTMENT_ERRORS:
      return action.errors

    case REMOVE_ERRORS:
      return []

    default:
      return oldState
  }
}

export default appointmentErrorsReducer
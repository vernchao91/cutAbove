import { 
  RECEIVE_STYLIST_ERRORS,
  REMOVE_ERRORS
} from "../../actions/stylist_actions"

const stylistErrorsReducer = (oldState = [], action) => {
  Object.freeze(oldState);

  switch(action.type) {
    case RECEIVE_STYLIST_ERRORS:
      return action.errors

    case REMOVE_ERRORS:
      return []

    default:
      return oldState
  }
}

export default stylistErrorsReducer
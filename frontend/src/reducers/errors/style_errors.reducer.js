import { 
  RECEIVE_STYLE_ERRORS,
  REMOVE_ERRORS
} from "../../actions/style_actions"

const styleErrorsReducer = (oldState = [], action) => {
  Object.freeze(oldState);

  switch(action.type) {
    case RECEIVE_STYLE_ERRORS:
      return action.errors

    case REMOVE_ERRORS:
      return []

    default:
      return oldState
  }
}

export default styleErrorsReducer
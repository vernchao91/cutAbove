import { 
  RECEIVE_REVIEW_ERRORS,
  REMOVE_ERRORS
} from "../../actions/review_actions"

const reviewErrorsReducer = (oldState = [], action) => {
  Object.freeze(oldState);

  switch(action.type) {
    case RECEIVE_REVIEW_ERRORS:
      return action.errors

    case REMOVE_ERRORS:
      return []

    default:
      return oldState
  }
}

export default reviewErrorsReducer
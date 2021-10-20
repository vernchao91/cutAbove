import {
  RECEIVE_STYLISTS,
  RECEIVE_STYLIST,
  REMOVE_STYLIST
} from "../../actions/stylist_actions";

const stylistsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState)

  switch (action.type) {
    case RECEIVE_STYLISTS:
      return action.stylists.data
      
    case RECEIVE_STYLIST:
      return Object.assign({}, oldState, action.stylist.data)

    case REMOVE_STYLIST:
      delete newState[action.stylistId]
      return newState

    default:
      return oldState
  }
}

export default stylistsReducer
import {
  RECEIVE_STYLES,
  RECEIVE_STYLE,
  REMOVE_STYLE
} from "../../actions/style_actions"

const stylesReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState);

  switch (action.type) {
    case RECEIVE_STYLES:
      return Object.assign({}, oldState, action.styles)

    case RECEIVE_STYLE:
      newState[action.style.id] = action.style
      return newState

    case REMOVE_STYLE:
      delete newState[action.styleId]
      return newState
      
    default:
      return oldState
  }
}

export default stylesReducer
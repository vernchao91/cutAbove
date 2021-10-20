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
      let updatedState = {};
      action.styles.data.forEach((style) => {
        updatedState[style._id] = style;
      });
      return updatedState

    case RECEIVE_STYLE:
      newState[action.style._id] = action.style
      return newState

    case REMOVE_STYLE:
      delete newState[action.styleId]
      return newState
      
    default:
      return oldState
  }
}

export default stylesReducer
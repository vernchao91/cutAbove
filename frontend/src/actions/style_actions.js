import * as StyleApiUtil from "../util/style_api_util";

export const RECEIVE_STYLES = "RECEIVE_STYLES";
export const RECEIVE_STYLE = "RECEIVE_STYLE";
export const REMOVE_STYLE = "REMOVE_STYLE";
export const RECEIVE_STYLE_ERRORS = "RECEIVE_STYLE_ERRORS";
export const REMOVE_ERRORS = "REMOVE_ERRORS"

export const receiveStyles = styles => {
  return {
    type: RECEIVE_STYLES,
    styles
  }
}
export const receiveStyle = style => {
  return {
    type: RECEIVE_STYLE,
    style
  }
}
export const removeStyle = styleId => {
  return {
    type: REMOVE_STYLE,
    styleId
  }
}
export const receiveStyleErrors = errors => {
  return {
    type: RECEIVE_STYLE_ERRORS,
    errors
  }
}
export const removeErrors = () => {
  return {
    type: REMOVE_ERRORS,
  }
}

export const fetch 
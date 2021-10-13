import * as StylistApiUtil from "../util/stylist_api_util";

export const RECEIVE_STYLISTS = "RECEIVE_STYLISTS";
export const RECEIVE_STYLIST = "RECEIVE_STYLIST";
export const REMOVE_STYLIST = "REMOVE_STYLIST";
export const RECEIVE_STYLIST_ERRORS = "RECEIVE_STYLIST_ERRORS";
export const REMOVE_ERRORS = "REMOVE_ERRORS";

export const receiveStylists = stylists => {
  return {
    type: RECEIVE_STYLISTS,
    stylists
  }
}
export const receiveStylist = stylist => {
  return {
    type: RECEIVE_STYLIST,
    stylist
  }
}
export const receiveStylistErrors = errors => {
  return {
    type: RECEIVE_STYLIST_ERRORS,
    errors
  }
}
export const removeErrors = () => {
  return { 
    type: REMOVE_ERRORS,
  }
}

export const fetchStylists = () => dispatch => {
  return StylistApiUtil.fetchStylists()
    .then(
      stylists => dispatch(receiveStylists(stylists)),
      err => dispatch(receiveStylistErrors(err.response.data))
    )
}
export const fetchStylist = stylistId => dispatch => {
  return StylistApiUtil.fetchStylist(stylistId)
    .then(
      stylist => dispatch(receiveStylist(stylist)),
      err => dispatch(receiveStylistErrors(err.response.data))
    )
}
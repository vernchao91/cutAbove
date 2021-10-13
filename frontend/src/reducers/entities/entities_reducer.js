import { combineReducers } from 'redux';
// import stylesReducer from "./styles_reducer";
import reviewsReducer from "./reviews_reducer";
// import appointmentsReducer from "./appointments_reducer";
// import messagesReducer from "./messages_reducer";

export default combineReducers({
  // styles: stylesReducer,
  reviews: reviewsReducer,
  // appointments: appointmentsReducer,
  // messages: messagesReducer,
});
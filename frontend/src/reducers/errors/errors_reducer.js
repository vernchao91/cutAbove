import { combineReducers } from 'redux';
import sessionErrorsReducer from './session_errors_reducer';
import styleErrorsReducer from "./style_errors_reducer";
import reviewErrorsReducer from "./review_errors_reducer";
import appointmentErrorsReducer from "./appointment_errors_reducer";
// import messageErrorsReducer from "./message_errors_reducer";

export default combineReducers({
  style: styleErrorsReducer,
  review: reviewErrorsReducer,
  appointment: appointmentErrorsReducer,
  // message: messageErrorsReducer,
  session: sessionErrorsReducer
});
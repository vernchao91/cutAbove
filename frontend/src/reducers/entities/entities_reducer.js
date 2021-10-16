import { combineReducers } from 'redux';
import stylesReducer from "./styles_reducer";
import stylistsReducer from "./stylists_reducer"
import reviewsReducer from "./reviews_reducer";
import appointmentsReducer from "./appointments_reducer";
import ClientsReducer from './clients_reducer';
// import messagesReducer from "./messages_reducer";

export default combineReducers({
  stylists: stylistsReducer,
  styles: stylesReducer,
  reviews: reviewsReducer,
  appointments: appointmentsReducer,
  clients: ClientsReducer
  // messages: messagesReducer,
});
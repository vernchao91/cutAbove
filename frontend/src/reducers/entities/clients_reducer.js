import { RECEIVE_CLIENT } from '../../actions/client_actions'

const ClientsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_CLIENT:
      return action.client.data;
  
    default:
      return oldState
  }
}

export default ClientsReducer
import * as ClientApiUtil from '../util/client_api_util'

export const RECEIVE_CLIENT = 'RECEIVE_CLIENT'

export const receiveClient = (client) => ({
  type: RECEIVE_CLIENT,
  client
})

export const fetchClient = (clientId) => (dispatch) => (
  ClientApiUtil.fetchClient(clientId)
    .then(client => dispatch(receiveClient(client)))
)

export const updateClient = client => dispatch => {
  return ClientApiUtil.updateClient(client)
    .then(
      client => dispatch(receiveClient(client))
    )
}
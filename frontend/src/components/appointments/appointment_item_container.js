import { fetchStyle } from '../../actions/style_actions'
import { fetchClient } from '../../actions/client_actions';
import { connect } from 'react-redux';
import AppointmentItem from './appointment_item';

const mapStateToProps = (state) => ({
  client: state.entities.client,
  style: state.entities.style,
})

const mapDispatchToProps = (dispatch) => ({
  fetchStyle: (styleId) => dispatch(fetchStyle(styleId)),
  fetchClient: (clientId) => dispatch(fetchClient(clientId))
})

export default connect(mapStateToProps, mapDispatchToProps)(AppointmentItem)
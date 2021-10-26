import { fetchStyle } from '../../actions/style_actions'
import { fetchClient } from '../../actions/client_actions';
import { fetchStylist } from '../../actions/stylist_actions';
import { connect } from 'react-redux';
import AppointmentItem from './appointment_item';

const mapStateToProps = (state) => ({
  // client: state.entities.clients,
  // style: state.entities.style,
  // stylist: state.entities.stylists
})

const mapDispatchToProps = (dispatch) => ({
  fetchStyle: (styleId) => dispatch(fetchStyle(styleId)),
  fetchClient: (clientId) => dispatch(fetchClient(clientId)),
  fetchStylist: (stylistId) => dispatch(fetchStylist(stylistId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(AppointmentItem)
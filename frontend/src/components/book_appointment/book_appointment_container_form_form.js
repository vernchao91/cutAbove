import {connect} from 'react-redux';
import { createAppointment } from '../../actions/appointment_actions';
import { fetchStylesFromStylist } from '../../actions/style_actions';
import { fetchStylist } from '../../actions/stylist_actions';
import AppointmentForm from './book_appointment';

const mapStateToProps = (state, ownProps) => ({
  user: state.session.user,
  stylist: state.entities.stylists,
  styles: Object.values({}, state.entities.stylists.styles)
})

const mapDispatchToProps = (dispatch) => ({
  createAppointment: (appointment) => dispatch(createAppointment(appointment)),
  fetchStylist: (stylistId) => dispatch(fetchStylist(stylistId)),
  fetchStylesFromStylist: (stylistId) => dispatch(fetchStylesFromStylist(stylistId))
})
export default connect(mapStateToProps, mapDispatchToProps)(AppointmentForm)
import {connect} from 'react-redux';
import { createAppointment } from '../../actions/appointment_actions';
import { fetchStylesFromStylist } from '../../actions/style_actions';
import AppointmentForm from './book_appointment';

const mapStateToProps = (state) => ({
  user: state.session.user
})

const mapDispatchToProps = (dispatch) => ({
  createAppointment: (appointment) => dispatch(createAppointment(appointment)),
  fetchStylesFromStylist: (stylistId) => dispatch(fetchStylesFromStylist(stylistId))
})
export default connect(mapStateToProps, mapDispatchToProps)(AppointmentForm)
import { connect } from 'react-redux';
import AppointmentsBooked from './appointments';
import { fetchAppointmentsFromUser, 
        fetchAppointmentsFromStylist,
        deleteAppointment } from '../../actions/appointment_actions';
import { fetchStylist } from '../../actions/stylist_actions';
import {fetchClient} from '../../actions/client_actions'

const mapStateToProps = (state) => ({
  user: state.session.user,
  appointments: Object.values(state.entities.appointments)
})

const mapDispatchToProps = (dispatch) => ({
  fetchStylist: (stylistId) => dispatch(fetchStylist(stylistId)),
  fetchClient: () => dispatch(fetchClient()),
  fetchAppointmentsFromStylist: (stylistId) => dispatch(fetchAppointmentsFromStylist(stylistId)),
  fetchAppointmentsFromUser: (clientId) => dispatch(fetchAppointmentsFromUser(clientId)),
  deleteAppointment: (appointmentId) => dispatch(deleteAppointment(appointmentId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(AppointmentsBooked)
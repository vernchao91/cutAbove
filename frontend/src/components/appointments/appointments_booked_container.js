import { connect } from 'react-redux';
import AppointmentsBooked from './appointments';
import { fetchAppointmentsFromUser, 
        fetchAppointmentsFromStylist,
        deleteAppointment,
        clearAppointments } from '../../actions/appointment_actions';
import { fetchStylist } from '../../actions/stylist_actions';
import { fetchClient } from '../../actions/client_actions'

const mapStateToProps = (state, ownProps) => ({
  user: state.session.user,
  appointments: Object.values(state.entities.appointments)
})

const mapDispatchToProps = (dispatch) => ({
  fetchStylist: (stylistId) => dispatch(fetchStylist(stylistId)),
  fetchClient: () => dispatch(fetchClient()),
  fetchAppointmentsFromStylist: (stylistId) => dispatch(fetchAppointmentsFromStylist(stylistId)),
  fetchAppointmentsFromUser: (clientId) => dispatch(fetchAppointmentsFromUser(clientId)),
  deleteAppointment: (appointmentId) => dispatch(deleteAppointment(appointmentId)),
  clearAppointments: () => dispatch(clearAppointments())
})

export default connect(mapStateToProps, mapDispatchToProps)(AppointmentsBooked)
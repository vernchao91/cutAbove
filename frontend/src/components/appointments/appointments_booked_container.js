import { connect } from 'react-redux';
import AppointmentsBooked from './appointments';
import { fetchAppointmentsFromUser, 
        fetchAppointmentsFromStylist,
        deleteAppointment } from '../../actions/appointment_actions'

const mapStateToProps = (state) => ({
  user: state.session.user,
  appointments: Object.values(state.entities.appointments)
})

const mapDispatchToProps = (dispatch) => ({
  fetchAppointmentsFromStylist: (stylistId) => dispatch(fetchAppointmentsFromStylist(stylistId)),
  fetchAppointmentsFromUser: (clientId) => dispatch(fetchAppointmentsFromUser(clientId)),
  deleteAppointment: (appointmentId) => dispatch(deleteAppointment(appointmentId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(AppointmentsBooked)
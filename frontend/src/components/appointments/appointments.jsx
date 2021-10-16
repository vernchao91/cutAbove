import React from 'react';
import AppointmentItemContainer from './appointment_item_container';

class AppointmentsBooked extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount() {
    if (this.props.user.id === this.props.stylist.id) {
      this.props.fetchAppointmentsFromStylist(this.props.stylist.id)
    } else {
      this.props.fetchAppointmentsFromUser(this.props.user.id)
    }
  }

  render(){
    return (
      <div>
        <ul>
          {
            this.props.appointments.map( (appointment, idx) => <AppointmentItemContainer
            key={idx} 
            deleteAppointment={this.props.deleteAppointment}
            appointment={appointment}
            />)
          }
        </ul>
      </div>
    )
  }
}

export default AppointmentsBooked
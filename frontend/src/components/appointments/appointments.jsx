import React from 'react';
import AppointmentItemContainer from './appointment_item_container';

class AppointmentsBooked extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      appointments: this.props.appointments
    }
  }

  componentDidMount() {
    console.log("app mount")
    this.props.fetchAppointmentsFromUser(this.props.user.id)
      .then(state => this.setState({appointments: this.props.appointments}))

    console.log(this.props.appointments)
  }

  render(){
    console.log(this.props.appointments)
    return (
      <div className='appointment-list-container'> 
        <div className='appointment-list'>
          {
            this.props.appointments.map((appointment, idx) => 
              <AppointmentItemContainer key={idx}
              deleteAppointment={this.props.deleteAppointment}
              appointment={appointment}
              />)
            }
        </div>
      </div>
    )
  }
}

export default AppointmentsBooked
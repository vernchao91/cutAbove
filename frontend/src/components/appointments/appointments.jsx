import React from 'react';
import AppointmentItemContainer from './appointment_item_container';
import AppointmentItem from './appointment_item';

class AppointmentsBooked extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      appointments: this.props.appointments
    }
  }

  componentDidMount() {
    if (this.props.user.address) {
      this.props.fetchAppointmentsFromStylist(this.props.user.id)
        .then(state => this.setState({appointments: this.props.appointments}))
    } else {
      this.props.fetchAppointmentsFromUser(this.props.user.id)
        .then(state => this.setState({appointments: this.props.appointments}))
    }
  }

  componentWillUnmount() {
    this.setState({});
  }

  render(){
    // if (this.props.appointments == null) return null
    return (
      <div className='appointment-list-container'> 
        <div className='appointment-list'>
          {
            this.state.appointments.map((appointment, idx) => 
              <AppointmentItemContainer key={idx}
              deleteAppointment={this.props.deleteAppointment}
              appointment={appointment}
              userId={this.props.user.id}
              />)
            }
        </div>
      </div>
    )
  }
}

export default AppointmentsBooked
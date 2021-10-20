import React from 'react';
import AppointmentItemContainer from './appointment_item_container';
import AppointmentItem from './appointment_item';

class AppointmentsBooked extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount() {
    // console.log('I mounted')
    if (this.props.appointments == null) {
      this.props.fetchAppointmentsFromUser(this.props.user.id)
    } else {
      this.props.fetchAppointmentsFromUser(this.props.user.id)
    }
  }



  render(){
    // if (this.props.appointments == null) return null
    return (
      <div className='appointment-list-container'> 
        <div className='appointment-list'>
          {
            this.props.appointments.map((appointment, idx) => 
            
              <AppointmentItemContainer key={`${idx}`} 
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
import React from 'react';
import AppointmentItemContainer from './appointment_item_container';

class AppointmentsBooked extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      appointments: this.props.appointments,
    }
    this.pastArr = []
    this.upcomingArr = []
    this.timeDeterminer = this.timeDeterminer.bind(this)
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
    this.props.clearAppointments();
  }

  timeDeterminer() {
    let today = new Date()
    
    for(let i = 0; i < this.state.appointments.length; i++) {
      let compDate = new Date(this.state.appointments[i].date)
      if(compDate.getTime() < today.getTime()) {
        this.pastArr.push(this.state.appointments[i])
      }
      else {
        this.upcomingArr.push(this.state.appointments[i])
      }
    }
  }

  render(){
    if (this.props.appointments === null) return null
    this.timeDeterminer()
    return (
      <div className='appointment-list-container'> 
        <div className='appointment-list'>
          <h3>past appointments</h3>
          {this.pastArr.map((appointment, idx) => 
          <AppointmentItemContainer key={idx}
          deleteAppointment={this.props.deleteAppointment}
          appointment={appointment}
          userId={this.props.user.id}
          passed = {true}
          />
          )}
        </div>
        <div className='appointment-list'>
          <h3>upcoming appointments</h3>
          {this.upcomingArr.map((appointment, idx) => 
          <AppointmentItemContainer key={idx}
          deleteAppointment={this.props.deleteAppointment}
          appointment={appointment}
          userId={this.props.user.id}
          passed = {false}
          />
          )}
        </div>
      </div>
    )
  }
}

export default AppointmentsBooked
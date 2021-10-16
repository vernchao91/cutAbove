import React from 'react';

class AppointmentItem extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchClient(appointment.clientId);
    this.props.fetchStyle(appointment.styleId)
  }

  render() {
    return(
      <li classname='appointment-item-container'>
        <h3 className='appointment-with'>Appointment with {this.props.stylist.firstName}</h3>
        <div className='appointment-details-container'>
          <p>{this.props.client.firstName}</p>
          <p>{this.props.styleType}</p>
          <p> {this.props.appointment.timeFrame}</p>
        </div>
        <button onClick={ () => this.props.deleteAppointment(this.props.appointment.id)}>Cancel Appointment</button>
      </li>
    )
  }
}

export default AppointmentItem
import React from 'react';

class AppointmentItem extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    console.log(this.props)
    this.props.fetchClient(this.props.appointment.clientId);
    this.props.fetchStyle(this.props.appointment.styleId)
    this.props.fetchStylist(this.props.appointment.stylistId)
  }

  render() {
    if (this.props.appointment === null ) return null
    return(
      <li className='appointment-item-container'>
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
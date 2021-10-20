import React from 'react';
import { Link } from "react-router-dom";

class AppointmentItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      appointment: this.props.appointment
    }
  }

  renderLink() {
    if (this.props.userId === this.props.appointment.stylistId) {
      return <p>{this.state.appointment.clientName}</p>
    } else {
      return <Link className="appointment-stylist-name" to={`/stylists/${this.state.appointment.stylistId}`}>{this.state.appointment.stylistName}</Link>
    }
  }

  renderDate() {
    const { date } = this.state.appointment;
    const year = date.slice(0, 4);
    const month = date.slice(5, 7);
    const day = date.slice(8, 10);
    return month + "-" + day + "-" + year;
  }

  renderTimeFrame() {
    const { time } = this.state.appointment.timeFrame;
    // const left = time.slice(0,5);
    // const right = time.slice(9, 13)
    // return left + "am" + " - " + right + "pm"
  }

  render() {
    // console.log(this.props.stylist)
    if (this.state.appointment === null ) return null
    return(
      <div className='appointment-item-container'>
        <h3 className='appointment-with'>Appointment with</h3>
        {this.renderLink()}
        {/* <Link className="appointment-stylist-name" to={`/stylists/${this.state.appointment.stylistId}`}>{this.state.appointment.stylistName}</Link> */}
        <div className='appointment-details-container'>
          <p>{this.state.appointment.styleType}</p>
          <p>{this.renderDate()}</p>
          <p>{this.renderTimeFrame()}</p>
          {/* <p>{this.state.appointment.date}</p> */}
          <p>{this.state.appointment.timeFrame}</p>
        </div>
        <button className='cancel-appointment' onClick={ () => this.props.deleteAppointment(this.state.appointment._id).then(this.setState({appointment: null}))}>Cancel Appointment</button>
      </div>
    )
  }
}

export default AppointmentItem
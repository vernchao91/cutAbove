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
    const date2 = new Date(date)
    const day = date.slice(8,10)
    const weekdayArray = [];
    weekdayArray[0] = "Monday";
    weekdayArray[1] = "Tuesday";
    weekdayArray[2] = "Wednesday";
    weekdayArray[3] = "Thursday";
    weekdayArray[4] = "Friday";
    weekdayArray[5] = "Saturday";
    weekdayArray[6] = "Sunday";
    const weekDay = weekdayArray[date2.getDay()]
    const monthArray = [];
    monthArray[0] = "Jan";
    monthArray[1] = "Feb";
    monthArray[2] = "Mar";
    monthArray[3] = "Apr";
    monthArray[4] = "May";
    monthArray[5] = "June";
    monthArray[6] = "July";
    monthArray[7] = "Aug";
    monthArray[8] = "Sept";
    monthArray[9] = "Oct";
    monthArray[10] = "Nov";
    monthArray[11] = "Dec";
    let month = monthArray[date2.getMonth()];

    return month + " " + day + ", " + weekDay
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   if (this.props.stylist !== nextProps.stylist) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }
  // componentDidUpdate(prevProps, prevState){
  //     if(prevProps.stylist !== this.props.stylist){
  //       this.props.fetchStylist(prevProps.appointment.stylistId)
  //       console.log(prevProps)
  //       console.log(this.props)
  //     }
  // }

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
          <p>{this.state.appointment.timeFrame}</p>
        </div>
        <button className='cancel-appointment' onClick={ () => this.props.deleteAppointment(this.state.appointment._id).then(this.setState({appointment: null}))}>Cancel Appointment</button>
      </div>
    )
  }
}

export default AppointmentItem
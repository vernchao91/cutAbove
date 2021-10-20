import React from 'react';

class AppointmentItem extends React.Component {
  constructor(props) {
    super(props)

    this.state = this.props.appointment
  }

  componentDidMount() {
    // this.props.clearStylists()
    // this.props.fetchClient(this.props.appointment.clientId);
    // this.props.fetchStylist(this.props.appointment.stylistId);
    // console.log(this.props.stylist.firstName)
    // console.log(this.props.appointment.stylistId)
    // console.log(this.props.stylists)
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
    if (this.props.appointment === null ) return null
    return(
      <div className='appointment-item-container'>
        <h3 className='appointment-with'>Appointment with {this.props.appointment.stylistName}</h3>
        <div className='appointment-details-container'>
          <p>{this.props.appointment.clientName}</p>
          <p>{this.props.styleType}</p>
          <p> {this.props.appointment.timeFrame}</p>
        </div>
        <button className='cancel-appointment' onClick={ () => this.props.deleteAppointment(this.state._id)}>Cancel Appointment</button>
      </div>
    )
  }
}

export default AppointmentItem
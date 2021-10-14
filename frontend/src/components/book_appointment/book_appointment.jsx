import React from 'react';

class AppointmentForm extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      clientId: this.props.user,
      stylistId: this.props.stylist.id,
      styleId: '',
      timeFrame: ''
    }
  }

  componentDidMount() {
    this.props.fetchStylesFromStylist(this.props.stylist.id)
  }



  render() {
    return (
      <div>
        <form>
          <h3>Book appointment with {this.props.stylist.firstName}</h3>
          
          <label>Enter your preferred Appointment Time 
            <input type="date" name="appointment-time" id="appointment-time" />
          </label>

          <label htmlFor=""></label>
        </form>
      </div>
    )
  }
}

export default AppointmentForm
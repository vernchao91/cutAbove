import React from 'react';

class AppointmentForm extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      clientId: this.props.user,
      stylistId: this.props.match.params.stylistId,
      styleId: '',
      timeFrame: ''
    }
  }

  componentDidMount() {
    this.props.fetchStylist(this.props.match.params.stylistId)
    this.props.fetchStylesFromStylist(this.props.match.params.stylistId)

  }



  render() {
    console.log(this.state.stylistId)
    if(!this.props.stylist) return null 
    else {

    
    return (
      <div>
        <form>
          <h3>Book appointment with {this.props.stylist.handle}</h3>
          
          <label>Enter your preferred appointment Time 
            <input type="date" name="appointment-time" id="appointment-time" />
          </label>

          <label htmlFor=""></label>
        </form>
      </div>
    )
  }
}
}

export default AppointmentForm
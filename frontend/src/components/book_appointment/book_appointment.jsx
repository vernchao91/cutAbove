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
    this.appointmentTimes = [
      '9:00 - 10:00', 
      '10:00 - 11:00',
      '11:00 - 12:00',
      '1:00 - 2:00',
      '2:00 - 3:00',
      '3:00 - 4:00',
      '4:00 - 5:00' ]
      // this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    this.props.fetchStylist(this.props.match.params.stylistId)
    this.props.fetchStylesFromStylist(this.props.match.params.stylistId)

  }

  // handleChange(field) {
  //   return e => {this.setState({[field] : e.currentTarget.value})}
  // }



  render() {
    if(!this.props.stylist) return null 
    else {

    
    var today = new Date()

    var dd = today.getDate()
    var mm = today.getMonth() + 1
    var yyyy = today.getFullYear()
    if (dd < 10) {
      dd = '0' + dd
    }
    if (mm < 10) {
      mm = '0' + mm
    }
    today = yyyy + '-' + mm + '-' + dd;
    return (
      <div>
        <form>
          <h3>Book appointment with {this.props.stylist.handle}</h3>
          
          <label>Enter your preferred appointment Time 
            <input type="date" className="appointment-time" id="appointment-time" min = {today}/>
          </label>
          <label>Time
            <select placeholder = "Select a time frame" value = {this.state.timeFrame}>å
            <option value="" disabled defaultValue>Select a time frame</option>
            {this.appointmentTimes.map((time, i) =>
              <option value = {time} key = {i}>{time}</option>
            )}
            </select>
          </label>
        </form>
      </div>
    )
  }
}
}

export default AppointmentForm
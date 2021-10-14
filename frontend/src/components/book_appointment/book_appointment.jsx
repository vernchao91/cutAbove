import React from 'react';

class AppointmentForm extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      clientId: this.props.user,
      stylistId: this.props.match.params.stylistId,
      styleId: '',
      timeFrame: '',
      // UNCOMMENT WHEN READY FOR PICTURES
      // pictureUrl: '',
      style: '',
    }
    this.appointmentTimes = [
      '9:00 - 10:00', 
      '10:00 - 11:00',
      '11:00 - 12:00',
      '1:00 - 2:00',
      '2:00 - 3:00',
      '3:00 - 4:00',
      '4:00 - 5:00' ]
      this.handleChange = this.handleChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
    
  }

  componentDidMount() {
    this.props.fetchStylist(this.props.match.params.stylistId)
    this.props.fetchStylesFromStylist(this.props.match.params.stylistId)

  }

  handleSubmit(e) {
    e.preventDefault()
    const appointment = Object.assign({}, this.state)
  }

  handleChange(field) {
    if(field === 'pictureUrl') {
      return e => {this.setState({pictureUrl: e.currentTarget.files[0]})}
    }
    return e => {this.setState({[field] : e.currentTarget.value})}
  }



  render() {
    if(!this.props.stylist) return null 
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
        <form className = "appointment-form">
          <h3 className = "appointent-form-title">Book your appointment with {this.props.stylist.handle}</h3>
          
          <label className = "appointment-form-date">Enter the date for your appointment
            <input type="date" className="appointment-input-date" min = {today}/>
          </label>
          
          <label className = "appointment-form-time dropdown">Time
            <select value = {this.state.timeFrame} className = "appointment-input-timeFrame dropdown" onChange = {this.handleChange('timeFrame')}>
            <option value="" disabled defaultValue className = "appoinment-time-option">Select a time frame</option>
            {this.appointmentTimes.map((time, i) =>
              <option className = "appoinment-time-option" value = {time} key = {i}>{time}</option>
            )}
            </select>
            </label>
            
            <label>Style
            <select value = {this.state.style} className = "appointment-input-style dropdown" text-align-last = "center" onChange = {this.handleChange('style')}>
            <option value="" disabled defaultValue className = "appoinment-style-option">Select the style you want</option>
            {this.props.styles.map((style, i) =>
              <option className = "appoinment-style-option" value = {style} key = {i}>{style}</option>
            )}
            </select>
            </label>
            {/* UNCOMMENT WHEN WE'RE READY FOR PICTURES */}
              {/* <label>Reference picture
                <input type = "file" value = {this.state.pictureUrl} onChange = {this.handleChange('pictureUrl')}/>
              </label> */}
              <label>Message
                <input type = "body" placeholder = "Send your stylist a message to let them know you're excited!" value = {this.state.message} onChange = {this.handleChange('message')} />
              </label>
            <button onClick = {this.handleSubmit} className = "buttonforsignupform">Book your appointment with {this.props.stylist.handle}!</button>
        </form>
      </div>
    )
}
}

export default AppointmentForm
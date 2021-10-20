import React from 'react';
import { uploadImage } from "../../actions/image_action"
import {withRouter} from 'react-router-dom'

class AppointmentForm extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      appointment: {
        date: '',
        clientId: this.props.user.id,
        stylistId: this.props.stylist._id,
        stylistName: this.props.stylist.firstName,
        clientName: this.props.user.firstName,
        timeFrame: '',
        imageUrl: '',
        style: '',
        message: '',
      },
      file: '',
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
      this.fileSelected = this.fileSelected.bind(this)
  }

  componentDidMount() {
    this.props.fetchStylist(this.props.match.params.stylistId)
    this.props.fetchStylesFromStylist(this.props.match.params.stylistId)
    
  }

  async handleSubmit(e) {
    e.preventDefault()
    let result = null

    if (this.state.file) {
      result = await uploadImage({image: this.state.file});
      this.setState( {appointment: {
        ...this.state.appointment,
        imageUrl: `/api/images/${result.imagePath}`
      }})
    }
    const appointment = Object.assign({}, this.state.appointment)
    console.log(this.state)
    // debugger
    this.props.createAppointment(appointment)
    .then(() => this.props.history.push(`/appointments/${this.state.appointment.clientId}`))
    // debugger
    // .then(() => {
    //   this.setState({
    //     appointment: {
    //       clientId: this.props.user.id,
    //       stylistId: this.props.match.params.stylistId,
    //       imageUrl: '',
    //       timeFrame: '',
    //       style: '',
    //     }
    //   })
    // }
    // )
  }

  handleChange(field) {
    console.log(this.state)
    // if(field === 'pictureUrl') {
    //   return e => {this.setState({pictureUrl: e.currentTarget.files[0]})}
    // }
    return e => {this.setState({appointment: {
      ...this.state.appointment,
      [field]: e.currentTarget.value
    }})}
  }

  fileSelected(e) {
    console.log(this.state)
    e.preventDefault();
    const file = e.target.files[0];
		this.setState( {file: file} );
    const reader = new FileReader();
    reader.onloadend = () => this.setState({appointment: {
      ...this.state.appointment,
      imageUrl: reader.result 
    }})
    if (file) {
      reader.readAsDataURL(file);
    } else {
      this.setState({appointment: {
        ...this.state.appointment,
        imageUrl: ''
      }})
    }    
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
          <h3 className = "appointment-form-title">Book your appointment with {this.props.stylist.handle}</h3>
          
          <label className = "appointment-form-date">Enter the date for your appointment
            <input type="date" className="appointment-input-date" min = {today} onChange = {this.handleChange('date')}/>
          </label>
          
          <label className = "appointment-form-time dropdown">Time
            <select value = {this.state.appointment.timeFrame} className = "appointment-input-timeFrame dropdown" onChange = {this.handleChange('timeFrame')}>
            <option value="" disabled defaultValue className = "appointment-time-option">Select a time frame</option>
            {this.appointmentTimes.map((time, i) =>
              <option className = "appoinment-time-option" value = {time} key = {i}>{time}</option>
            )}
            </select>
            </label>
            
            <label>Style
            <select value = {this.state.appointment.style} className = "appointment-input-style dropdown" text-align-last = "center" onChange = {this.handleChange('style')}>
            <option value="" disabled defaultValue className = "appoinment-style-option">Select the style you want</option>
            {this.props.styles.map((style, i) =>
              <option className = "appoinment-style-option" value = {style} key = {i}>{style}</option>
            )}
            </select>
            </label>
            
              <label id = "appointment-form-ref-pic-label">Reference picture
              <div className = "appointment-form-pic">
                <input type = "file" accept="image/*" onChange = {this.fileSelected}/>
                <div className = "book-appointment-button">Choose a file you want to submit</div>
                {!this.state.appointment.imageUrl ? null : <div className = "appointment-form-ref-pic" style = {{backgroundImage : `url(${this.state.appointment.imageUrl})`}} />}
              </div>
              </label>
              <label>Message
                <input type = "body" placeholder = "Send your stylist a message to let them know you're excited!" value = {this.state.appointment.message} onChange = {this.handleChange('message')} />
              </label>
            <button onClick = {this.handleSubmit} className = "book-appointment-button">Book your appointment with {this.props.stylist.handle}!</button>
        </form>
      </div>
    )
}
}

export default withRouter(AppointmentForm)
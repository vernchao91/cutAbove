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
      errors: {}
    }
    
    this.appointmentTimes = [
      '9:00am - 10:00am', 
      '10:00am - 11:00am',
      '11:00am - 12:00pm',
      '1:00pm - 2:00pm',
      '2:00pm - 3:00pm',
      '3:00pm - 4:00pm',
      '4:00pm - 5:00pm' ]
      this.handleChange = this.handleChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
      this.fileSelected = this.fileSelected.bind(this)
  }

  componentDidMount() {
    this.props.fetchStylist(this.props.match.params.stylistId)
    this.props.fetchStylesFromStylist(this.props.match.params.stylistId)
    // this.props.fetchStyles()
  }

  componentWillUnmount() {
    this.props.removeErrors();
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
    this.props.createAppointment(appointment)
    .then(() => {
      if(this.state.appointment.timeFrame && this.state.appointment.date) {
        this.props.history.push(`/appointments/${this.state.appointment.clientId}`)
      }
      this.setState({errors: this.props.errors})
    })
  }

  handleChange(field) {
    return e => {this.setState({appointment: {
      ...this.state.appointment,
      [field]: e.currentTarget.value
    }})}
  }

  fileSelected(e) {
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
    if(!this.props.stylist && !this.props.styles) return null 
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

    let timeFrameErrorLabel, 
        dateErrorLabel, 
        notAvailableErrorLabel
         = <></>;

        let errorsArr = Object.values(this.state.errors)
        if (errorsArr.length) {

          errorsArr.forEach(error => {
              if (error === 'Date field required') {
              dateErrorLabel = <label className="error-message">Please select a date</label>
              }
              if (error === 'Time frame field required') {
                  timeFrameErrorLabel = <label className="error-message">Please select a time frame</label>
              }

              if (error === 'Please book another time frame') {
                  notAvailableErrorLabel = <label className="error-message">This stylist is booked for {this.state.appointment.date} at {this.state.appointment.timeFrame}.</label>
              }
          })
      }

    return (
      <div>
        <form className = "appointment-form">
          <h3 className = "appointment-form-title">Book your appointment with {this.props.stylist.handle}</h3>
          {notAvailableErrorLabel}
          <label className = "appointment-form-date">Enter the date for your appointment
            <input type="date" className="appointment-input-date" min = {today} onChange = {this.handleChange('date')}/>
            {dateErrorLabel}
          </label>
          <label className = "appointment-form-time dropdown">Time
            <select value = {this.state.appointment.timeFrame} className = "appointment-input-timeFrame dropdown" onChange = {this.handleChange('timeFrame')}>
            <option value="" disabled defaultValue className = "appointment-time-option">Select a time frame</option>
            {this.appointmentTimes.map((time, i) =>
              <option className = "appointment-time-option" value = {time} key = {i}>{time}</option>
            )}
            </select>
            {timeFrameErrorLabel}
            </label>
            <label>Style
            <select value = {this.state.appointment.style} className = "appointment-input-style dropdown" text-align-last = "center" onChange = {this.handleChange('style')}>
            <option value="" disabled defaultValue className = "appointment-style-option">Select the style you want</option>
            {this.props.styles.map((style, i) =>
              <option className = "appointment-style-option" value = {style.description} key = {i}>{style.description}</option>
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
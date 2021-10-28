import React from 'react';
import { withRouter } from 'react-router-dom';
// import gronk from './gronk.jpeg'

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      handle: '',
      password: '',
      password2: '',
      errors: {},
      stylist: false,
      address: '',
      phoneNumber: '',
    };
    this.toggleClient = this.toggleClient.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearedErrors = false;
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.signedIn) {
      const user = Object.assign({}, this.state)
      if(this.state.stylist) {
        this.props.stylistLogin(user)
      }
      else {
        this.props.login(user)
      }
      this.props.closeModal()
      // this.props.history.push('/');
    }

    this.setState({errors: nextProps.errors})
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  toggleClient() {
    if(this.state.stylist) {
      this.setState({'stylist': false})
    }
    else {
      this.setState({'stylist': true})
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state)

    if(this.state.stylist) {
      this.props.stylistSignup(user, this.props.history)
    }
    else {
      this.props.signup(user, this.props.history); 
    }
  }

  render() {
    let emailErrorLabel, 
    handleErrorLabel, 
    passwordErrorLabel,
    passwordConfirmErrorLabel,
    validPhoneNumErrorLabel, 
    firstNameErrorLabel,
    lastNameErrorLabel,
    handleTakenLabel,
    passwordConfirmEmptyErrorLabel,
    passwordMatchLabel,
    emailTakenLabel = <label></label>;
    
    let errorsArr = Object.values(this.state.errors)

    if (errorsArr.length) {
        errorsArr.forEach(error => {
          if (error === 'Handle field is required') {
            handleErrorLabel = <label  className="error-message">Handle can't be blank</label>
        }
        if (error === 'Handle has already been taken') {
            handleTakenLabel = <label  className="error-message">That username has already been taken</label>
        }

        if (error === 'Email is invalid') {
            emailErrorLabel = <label  className="error-message">You must sign up with a valid email address</label>
        }

        if (error === 'Email has already been registered') {
          emailTakenLabel = <label  className="error-message">This email is already attached to a user</label>
      }

      if (error === 'First Name field is required') {
        firstNameErrorLabel = <label  className="error-message">We have to know your first name!</label>
      }
            if (error === 'Last Name field is required') {
              lastNameErrorLabel = <label  className="error-message">We have to know your last name!</label>
            }

            if (error === 'Password must be at least 6 characters') {
                passwordErrorLabel = <label  className="error-message">Your password must be at least 6 characters long</label>
            }
            if (error === 'Confirm Password field is required') {
              passwordConfirmEmptyErrorLabel = <label  className="error-message">You must retype your password again to register</label>
          }
            if (error === 'Password field is required') {
              passwordConfirmErrorLabel = <label className="error-message">You must enter the same password twice</label>
            }
            if (error === 'Passwords must match') {
              passwordMatchLabel = <label  className="error-message">The password you entered does not much</label>
          }
          if (error === 'Passwords must match') {
            passwordMatchLabel = <label  className="error-message">The password you entered does not much</label>
        }
        if(error === 'Invalid phone number') {
          validPhoneNumErrorLabel = <label  className="error-message">Please enter your phone number in the valid format -<br/>XXX-XXX-XXXX</label>
        }
        })
    }

    return (
        <>
        <div onClick={this.props.closeModal} className="close-x-right">X</div>
        <div className="session-form signup-form">
        <form onSubmit={this.handleSubmit}>
        <h3 className='session-form-title'>sign up</h3>
        <br />
        <div className = "client-stylist-slider">
          
          {this.state.stylist ? <div className = "toggle-not-selected">client</div> : <div>client</div>}
        <label className="switch">
        <input type="checkbox" 
        checked = {this.state.stylist} 
        onChange = {this.toggleClient}
        />
        <div className="slider round"></div>
        </label>
        {!this.state.stylist ? <div className = "toggle-not-selected">stylist</div> : <div>stylist</div>}
        </div>
              <input type="text"
                value={this.state.firstName}
                onChange={this.update('firstName')}
                placeholder="first name"
                />
                {firstNameErrorLabel}
            <br/>
                <input type="text"
                  value={this.state.lastName}
                  onChange={this.update('lastName')}
                  placeholder="last name"
                />
                {lastNameErrorLabel}
            <br/>
              <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                placeholder="email"
              />
              {emailTakenLabel}
              {emailErrorLabel}
            <br/>
              <input type="text"
                value={this.state.handle}
                onChange={this.update('handle')}
                placeholder="handle"
              />
              {handleTakenLabel}
              {handleErrorLabel}
            <br/>
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                placeholder="password"
                />
            {passwordErrorLabel}
            <br/>
              <input type="password"
                value={this.state.password2}
                onChange={this.update('password2')}
                placeholder="confirm password"
                />
                {passwordConfirmEmptyErrorLabel}
                {passwordMatchLabel}
            <br/>
              {this.state.stylist ? 
              <>
              <input type="text"
              value={this.state.phoneNumber}
              onChange={this.update('phoneNumber')}
              placeholder="business phone number - XXX-XXX-XXXX"
              />
              {validPhoneNumErrorLabel}
              <br/>
              <input type="text"
              value={this.state.address}
              onChange={this.update('address')}
              placeholder="place of work"
              />
              <br/>
                </>
              : 
              null}
            <input type="submit" value="submit" className = "book-appointment-button demo-login"/>
        </form>
        <div className="client-sign-up-model gronk"/>
          </div>
          </>
    );
  }
}

export default withRouter(SignupForm);
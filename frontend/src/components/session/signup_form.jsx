import React from 'react';
import { withRouter } from 'react-router-dom';
import gronk from './gronk.jpeg'

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
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearedErrors = false;
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.signedIn === true) {
      this.props.history.push('/login');
    }

    this.setState({errors: nextProps.errors})
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let user = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      handle: this.state.handle,
      password: this.state.password,
      password2: this.state.password2
    };

    this.props.signup(user, this.props.history); 
  }

  render() {
    let emailErrorLabel, 
    handleErrorLabel, 
    passwordErrorLabel,
    passwordMatchLabel,
    passwordConfirmErrorLabel, 
    firstNameErrorLabel,
    lastNameErrorLabel,
    handleTakenLabel,
    passwordConfirmEmptyErrorLabel,
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
            emailErrorLabel = <label  className="error-message">You sign up with a valid email address</label>
        }

        if (error === 'Email has already been registered') {
          emailTakenLabel = <label  className="error-message">This email is already attached to a user</label>
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

        })
    }

    return (
        <div className="session-form signup-form">
        
        {/* {this.renderErrors()} */}
        <form onSubmit={this.handleSubmit}>
        <h3 className='session-form-title'>Client Sign Up</h3>
              <input type="text"
                value={this.state.firstName}
                onChange={this.update('firstName')}
                placeholder="First Name"
                />
                {firstNameErrorLabel}
            <br/>
                <input type="text"
                  value={this.state.lastName}
                  onChange={this.update('lastName')}
                  placeholder="Last Name"
                />
                {lastNameErrorLabel}
            <br/>
              <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                placeholder="Email"
              />
              {emailTakenLabel}
              {emailErrorLabel}
            <br/>
              <input type="text"
                value={this.state.handle}
                onChange={this.update('handle')}
                placeholder="Handle"
              />
              {handleTakenLabel}
              {handleErrorLabel}
            <br/>
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                placeholder="Password"
                />
            {passwordErrorLabel}
            <br/>
              <input type="password"
                value={this.state.password2}
                onChange={this.update('password2')}
                placeholder="Confirm Password"
                />
                {passwordConfirmEmptyErrorLabel}
                {passwordConfirmErrorLabel}
            <br/>
            {passwordMatchLabel}
              <br/>
            <input type="submit" value="Submit" className = "submit-button"/>
        </form>
        <img className="client-sign-up-model" src={gronk} alt = "gronkilicous"/>
          </div>
    );
  }
}

export default withRouter(SignupForm);
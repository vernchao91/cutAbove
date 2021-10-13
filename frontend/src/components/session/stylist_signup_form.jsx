import React from 'react';
import { withRouter } from 'react-router-dom';
import model from './girlModel.jpeg'

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
      phoneNumber: '',
      address: '',
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
      password2: this.state.password2,
      phoneNumber: this.state.phoneNumber,
      address: this.state.address
    };

    this.props.signupStylist(user, this.props.history); 
  }

  renderErrors() {
    return(
      <ul>
        {Object.keys(this.state.errors).map((error, i) => (
          <li key={`error-${i}`}>
            {this.state.errors[error]}
          </li>
        ))}
      </ul>
    );
  }
  
  render() {
    return (
      <div className="form-container">
        <img className="client-sign-up-model" src={model}/>
        <div className="session-form">
        <h3 className='session-form-title'>Stylist Sign Up</h3>
        {this.renderErrors()}
        <form onSubmit={this.handleSubmit}>
            <br/>
              <input type="text"
                value={this.state.firstName}
                onChange={this.update('firstName')}
                placeholder="First Name"
              />
            <br/>
                <input type="text"
                  value={this.state.lastName}
                  onChange={this.update('lastName')}
                  placeholder="Last Name"
                />
            <br/>
              <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                placeholder="Email"
              />
            <br/>
              <input type="text"
                value={this.state.handle}
                onChange={this.update('handle')}
                placeholder="Handle"
              />
            <br/>
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                placeholder="Password"
              />
            <br/>
              <input type="password"
                value={this.state.password2}
                onChange={this.update('password2')}
                placeholder="Confirm Password"
              />
            <br/>
            <input type="text"
                value={this.state.phoneNumber}
                onChange={this.update('phoneNumber')}
                placeholder="Phone number"
              />
              <br/>
              <input type="text"
                value={this.state.address}
                onChange={this.update('address')}
                placeholder="Address"
              />
              <br/>
            <input type="submit" value="Submit" />
        </form>
          </div>
      </div>
    );
  }
}

export default withRouter(SignupForm);
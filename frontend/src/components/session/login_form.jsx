import React from 'react';
import { withRouter } from 'react-router-dom';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.currentUser === true) {
      // this.props.history.push('/');
    }

    this.setState({errors: nextProps.errors})
  }

  // componentWillUnmount() {
  //   this.props.clearErrors();
  // }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    let user = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.login(user); 
  }

  renderErrors() {
    return(
      <ul className='errors'>
        {Object.keys(this.state.errors).map((error, i) => (
          <li key={`error-${i}`}>
            {this.state.errors[error]}
          </li>
        ))}
      </ul>
    );
  }

  render() {


        let emailErrorLabel, 
        emailNotExistLabel, 
        passwordErrorLabel, 
        loginErrorsLabel = <label></label>;


        let errorsArr = Object.values(this.state.errors)
        if (errorsArr.length) {

            errorsArr.forEach(error => {
                if (error === 'Email field is required') {
                    emailErrorLabel = <label className="error-message">Email can't be blank</label>
                }

                if(error === 'This user does not exist') {
                    emailNotExistLabel = <label className="error-message">This user does not exist in our user database. Did you mean to log into your stylist page?</label>
                }

                if (error === 'Password field is required') {
                    passwordErrorLabel = <label  className="error-message">Password can't be blank</label>
                }

                if (error === 'Incorrect password') {
                    loginErrorsLabel = <label  className="error-message">Enter a valid username and password combination</label>
                }
            })
        }

    return (
        <div className='session-form login'>
        <form onSubmit={this.handleSubmit}>
        <h3 className='session-form-title'>
        <br />
        <br />
        Log In
        </h3>
              <input className =  "test" type="text"
                value={this.state.email}
                onChange={this.update('email')}
                placeholder="Email"
              />
              {emailErrorLabel}
              {emailNotExistLabel}
            <br/>
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                placeholder="Password"
              />
            {passwordErrorLabel}
            {loginErrorsLabel}
            <br/>
            <input type="submit" className = "submit-button" value="Log In" />
        </form>
        </div>
    );
  }
}

export default withRouter(LoginForm);
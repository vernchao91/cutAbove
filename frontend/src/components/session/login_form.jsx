import React from 'react';
import { withRouter } from 'react-router-dom';


class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      email: '',
      password: '',
      errors: {},
      stylist: false,
    };
    this.demoLogin = this.demoLogin.bind(this)
    this.toggleClient = this.toggleClient.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    // debugger
    if (nextProps.currentUser === true) {
      this.props.closeModal()
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

  toggleClient() {
    if(this.state.stylist) {
      this.setState({'stylist': false})
    }
    else {
      this.setState({'stylist': true})
    }
    console.log(this.state.stylist)
  }

  handleSubmit(e) {
    e.preventDefault();
    // this.setState({errors : {}})
    let user = {
      email: this.state.email,
      password: this.state.password
    };

    if(this.state.stylist) {
      this.props.stylistLogin(user)
    }

    else {
      this.props.login(user)
    } 

  }

  demoLogin() {
    const user = {
      email: 'demo@cutAbove.com',
      password: 'demotestdemo'
    }
    this.props.login(user)
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

                if (error === 'Email is invalid') {
                  emailErrorLabel = <label className="error-message">That is not a valid email</label>
              }

                if(error === 'This user does not exist') {
                  emailNotExistLabel = <label className="error-message">This user does not exist in our user database. Did you mean to log into your stylist page?</label>
                }

                if(error === 'This stylist does not exist') {
                  emailNotExistLabel = <label className="error-message">This stylist does not exist in our user database. Did you mean to log into your user page?</label>
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
        login
        </h3>
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
                value={this.state.email}
                onChange={this.update('email')}
                placeholder="email"
              />
              {emailErrorLabel}
              {emailNotExistLabel}
            <br/>
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                placeholder="password"
              />
            {passwordErrorLabel}
            {loginErrorsLabel}
            <br/>
            <input type="submit" className = "book-appointment-button" value="login" />
            <br/>
            <div className = "book-appointment-button demo-login" onClick = {this.demoLogin}>demo login</div>
        </form>
        </div>
    );
}
}

export default withRouter(LoginForm);
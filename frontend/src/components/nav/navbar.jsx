import React from 'react';
import { Link } from 'react-router-dom'

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
  }

  logoutUser(e) {
      e.preventDefault();
      this.props.logout();
  }

  getLinks() {
      if (this.props.loggedIn) {
        return (
            <div>
                <button onClick={this.logoutUser}>Logout</button>
            </div>
        );
      } else {
        return (
            <div>
                <Link to={'/signup'}>Signup</Link>
                
                <Link to={'/login'}>Login</Link>
            </div>
        );
      }
  }

  render() {
      return (
        <div className = "nav-bar">
          <a href= "https://www.target.com/c/hair-care-beauty/-/N-5xu0k">Buy styling/care products!</a>
          <Link to={'/cuts'}>Refer a friend</Link>
          <div className = "logo main"><Link to ="/"></Link></div>
          <Link to={'/appointment'}>Your appointments</Link>
            { this.getLinks() }
        </div>
      );
  }
}

export default NavBar;
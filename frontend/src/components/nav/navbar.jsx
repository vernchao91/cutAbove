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
          <div className="nav-bar-buttons">
            <button onClick={this.logoutUser}>logout</button>
            <Link to={'/cuts'}>Refer a friend</Link>
            <Link to={`/users/${this.props.user.id}`}>my profile</Link>
          </div>
        );
      } else {
        return ( 
          <div className="nav-bar-buttons">
            <Link to={'/signup'}>register</Link>
            {/* <Link to={'/login'}>Login</Link> */}
            <button onClick={() => this.props.openModal('login')} className = "nav">login</button>
            <a href= "https://www.target.com/c/hair-care-beauty/-/N-5xu0k" target="_blank" rel="noreferrer noopener">care for<br/>your hair</a>
          </div>
        );
      }
  }

  render() {
      return (
        <div className = "nav-bar">
          <Link className = "logo-main" to ="/"></Link>
            { this.getLinks() }
        </div>
      );
  }
}

export default NavBar;
import React from 'react';
import { Link } from 'react-router-dom'

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
    this.toggleLink = this.toggleLink.bind(this);
  }

  logoutUser(e) {
      e.preventDefault();
      this.props.logout();
  }

  toggleLink() {
    return this.props.user.address ? 
    <Link to={`/stylists/${this.props.user.id}/edit`}>my profile</Link> : 
    <Link to={`/users/${this.props.user.id}`}>my profile</Link>
  }

  getLinks() {
      if (this.props.loggedIn) {
        return (
          <div className="nav-bar-buttons">
            <button onClick={this.logoutUser}>logout</button>
            <Link to={`/appointments/${this.props.user.id}`}>appointments</Link>
            {/* <Link to={'/cuts'}>refer a friend</Link> */}
            {/* <Link to={`/users/${this.props.user.id}`}>my profile</Link> */}
            {this.toggleLink()}
          </div>
        );
      } else {
        return ( 
          <div className="nav-bar-buttons">
            {/* <Link to={'/signup'}>register</Link> */}
            <button onClick={() => this.props.openModal('signup')}>register</button>
            {/* <Link to={'/login'}>Login</Link> */}
            <button onClick={() => this.props.openModal('login')}>login</button>
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
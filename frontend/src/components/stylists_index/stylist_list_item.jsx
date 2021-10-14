import React from 'react';
import { Link } from 'react-router-dom';
import vern25 from './vern25.png'

class StylistIndexItem  extends React.Component{
  constructor(props){
    super(props)

    this.addressSplitStreet = this.addressSplitStreet.bind(this);
    this.addressSplitCity =  this.addressSplitCity.bind(this);
  }

  addressSplitStreet() {
    let splitString = this.props.stylist.address.split(',');
    return (
     <p>{splitString[0]}, </p>
    )
  }

  addressSplitCity() {
    let splitString = this.props.stylist.address.split(',')
    return (
      <p>{splitString.splice(1).join(', ')}</p>
    )
  }

  render() {
    if (this.props.stylist.address == null) {
      return (
        null
      ) 
    } else {

      return(
      <li className='stylist-index-item'>
        <div className='stylist-index-link-profile'>
        <img className='stylist-index-photo' src={vern25} />
        </div>
        <div className='stylist-index-info-container'>
        <p className='stylist-index-item-info'>
        {this.props.stylist.firstName} {this.props.stylist.lastName}
        {this.addressSplitStreet()}
        {this.addressSplitCity()}
        {this.props.stylist.phoneNumber}
        {this.props.stylist.rating}
        </p>
        <div className='stylist-index-link'>
        <Link to={`/stylists/${this.props.stylist._id}`}> View {this.props.stylist.firstName}'s Work </Link>
        </div>
        </div>
      </li>
      )
    }

  }
}

export default StylistIndexItem


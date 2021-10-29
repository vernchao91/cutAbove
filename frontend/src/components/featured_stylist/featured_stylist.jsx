import React from 'react'
import featuredStylist from './featured-stylist.jpg'
import featuredBarber from './featured-barber.jpg'
import { Link } from 'react-router-dom'

class FeaturedStylist extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            stylists: this.props.stylists
        }

        this.addressSplitCity =  this.addressSplitCity.bind(this); 
    }

    componentDidMount(){
        this.props.fetchStylists()
    }

    // addressSplitStreet() {
    //     let splitString = this.props.stylist.address.split(',');
    //     return (
    //      <p>{splitString[0]}, </p>
    //     )
    //   }
    
    addressSplitCity(chosenStylist) {
        if(!chosenStylist.address) { return null }
        let splitString = chosenStylist.address.split(',')
        return (
          `${splitString.splice(1).join(', ')}`
        )
    }

      addressSplitState(chosenStylist) {
        if(!chosenStylist.address) { return null }
        let splitString = chosenStylist.address.split(',')
        return (
          `${splitString.splice(2).join(', ')}`
        )
      }

    render() {
        if (this.props.stylists.length === 0) return null
        let chosenStylistId = 1
        let chosenStylist = this.props.stylists[chosenStylistId]
        let chosenBarberId = 0
        let chosenBarber = this.props.stylists[chosenBarberId]
        return (
            <div className = "featured-container">
                <div className="featured-stylist-container">
                    <div className="featured-stylist-header">featured stylist</div>
                        <span className="featured-stylist-name">{chosenStylist.handle}</span>
                    <div className = "featured-stylist-profile-pic" style = {{backgroundImage : `url(${featuredStylist})`}} />
                    <div className = "featured-stylist-details">
                        <Link to={`./stylists/${chosenStylist._id}`} className = "book-appointment-button">{chosenStylist.handle}'s profile</Link>
                        <ul>
                            <li>name: {chosenStylist.firstName} {chosenStylist.lastName}</li>
                            <li>email: {chosenStylist.email}</li>
                            <li>chair located in: {this.addressSplitCity(chosenStylist)}</li>
                        </ul>
                        <div className = "featured-stylist-description">
                            {chosenStylist.firstName} has been styling hair in {this.addressSplitState(chosenStylist)} for 15 years.<br/>
                            Legend has it they once gave someone such a good beehive haircut, a swarm of bees descended on them as soon as they left the store.
                            Click the button above to  to read more to see if they're available for an appointment with you!
                        </div>
                    </div>
                </div>
                <div className="featured-stylist-container">
                    <div className="featured-stylist-header">featured barber</div>
                        <span className="featured-stylist-name">{chosenBarber.handle}</span>
                    <div className = "featured-stylist-profile-pic" style = {{backgroundImage : `url(${featuredBarber})`}} />
                    <div className = "featured-stylist-details">
                        <Link to={`./stylists/${chosenBarber._id}`} className = "book-appointment-button">{chosenBarber.handle}'s profile</Link>
                        <ul>
                            <li>name: {chosenBarber.firstName} {chosenBarber.lastName}</li>
                            <li>email: {chosenBarber.email}</li>
                            <li>chair located in: {this.addressSplitCity(chosenBarber)}</li>
                        </ul>
                        <div className = "featured-stylist-description">
                            {chosenBarber.firstName} has been styling hair in {this.addressSplitState(chosenBarber)} for 15 years.<br/>
                            Legend has it they once gave someone such a good beehive haircut, a swarm of bees descended on them as soon as they left the store.
                            Click the button above to  to read more to see if they're available for an appointment with you!
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default FeaturedStylist
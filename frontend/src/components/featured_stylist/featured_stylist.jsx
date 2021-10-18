import React from 'react'
import featuredStylist from './featured-stylist.jpg'
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
        let splitString = chosenStylist.address.split(',')
        return (
          `${splitString.splice(1).join(', ')}`
        )
      }

      addressSplitState(chosenStylist) {
        let splitString = chosenStylist.address.split(',')
        return (
          `${splitString.splice(2).join(', ')}`
        )
      }

    render() {
        if (this.props.stylists.length === 0) return null
        let chosenStylistId = 1
        let chosenStylist = this.props.stylists[chosenStylistId]
        return (
            <div className = "featured-stylist-container">
                <div className="featured-stylist-header">featured stylist:
                <span className="featured-stylist-name">{chosenStylist.handle}</span></div>
                <div className="featured-stylist-info">
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
            </div>
        )
    }
}

export default FeaturedStylist
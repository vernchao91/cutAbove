import React from 'react'
import featuredStylist from './featured-stylist.jpg'
import { Link } from 'react-router-dom'

class FeaturedStylist extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            stylists: this.props.stylists
        }
    }

    componentDidMount(){
        this.props.fetchStylists()
    }

    // featureAStylist(){
    //     // let chosenStylistId = Math.floor(Math.random() * 11)
    //     let chosenStylistId = 1
    //     let chosenStylist = this.props.stylists[chosenStylistId]
    //     return (
    //         <div className = "featured-stylist-container">
    //             <div className="featured-stylist-header">featured stylist</div>
    //             <div className="featured-stylist-name">{chosenStylist.handle}</div>
    //             <div className="featured-stylist-info">
    //                 <Link to={`./stylists/${chosenStylist._id}`}>View Details</Link>
    //                 {/* <img src={featuredStylist}/> */}
    //                 <div className = "featured-stylist-profile-pic" style = {{backgroundImage : `url(${featuredStylist})`}} />
    //                 <div className = "featured-stylist-details">
    //                 <ul>
    //                     <li>Name: {chosenStylist.firstName} {chosenStylist.lastName}</li>
    //                     <li>Email: {chosenStylist.email}</li>
    //                     <li>Phone Number: {chosenStylist.phoneNumber}</li>
    //                     <li>Store Address: {chosenStylist.address}</li>
    //                 </ul>
    //                 </div>
    //             </div>
    //             <div className = "featured-stylist-description">
    //                 {chosenStylist.firstName} has been styling hair for 15 years in WhoVille.<br/>
    //                 They give such good hair styles, they makes European soccer players blush. 
    //                 Click "View Details" to read more about their story and see if they're available for an appointment
    //             </div>
    //         </div>
    //     )
    // }

    render() {
        if (this.props.stylists.length === 0) return null
        let chosenStylistId = 1
        let chosenStylist = this.props.stylists[chosenStylistId]
        return (
            <div className = "featured-stylist-container">
                <div className="featured-stylist-header">featured stylist</div>
                <div className="featured-stylist-name">{chosenStylist.handle}</div>
                <div className="featured-stylist-info">
                    <Link to={`./stylists/${chosenStylist._id}`} className = "book-appointment-button">{chosenStylist.handle}'s profile</Link>
                    {/* <img src={featuredStylist}/> */}
                    <div className = "featured-stylist-profile-pic" style = {{backgroundImage : `url(${featuredStylist})`}} />
                    <div className = "featured-stylist-details">
                    <ul>
                        <li>Name: {chosenStylist.firstName} {chosenStylist.lastName}</li>
                        <li>Email: {chosenStylist.email}</li>
                        <li>Phone Number: {chosenStylist.phoneNumber}</li>
                        <li>Store Address: {chosenStylist.address}</li>
                    </ul>
                    </div>
                </div>
                <div className = "featured-stylist-description">
                    {chosenStylist.firstName} has been styling hair for 15 years in WhoVille.<br/>
                    They give such good hair styles, they makes European soccer players blush. 
                    Click "View Details" to read more about their story and see if they're available for an appointment
                </div>
            </div>
        )
    }
}

export default FeaturedStylist
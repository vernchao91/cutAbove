import React from 'react'
import { Link } from 'react-router-dom'

class FeaturedStylist extends React.Component {
    render() {
        return(
            <div className = "featured-stylist-container">
                <div className = "profile-picture featured-stylist-picture">Profile picture goes here</div>
                Image carousel
                <Link to={'/stylists/61676f4e567f919e9e722d1a'}><button>View Details</button></Link>
                <br/>
                <div className = "featured-stylist-description">Martin has been cutting hair for 15 years in WhoVille.<br/>He gives such good skin fades, he makes European soccer players blush. Click here to read more about his story and see if he's available for an appointment</div>
            </div>
        )
    }
}

export default FeaturedStylist
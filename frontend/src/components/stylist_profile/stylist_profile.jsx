import React from 'react'
import { Link } from 'react-router-dom'
import ReviewIndexContainer from '../reviews/review_index_container'

class StylistProfile extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchStylesfromStylist(this.props.match.params.stylistId)
        this.props.fetchStylist(this.props.match.params.stylistId)
    }

    render() {
        if (!this.props.stylist) return null
        const { stylist } = this.props
        return (
            <div>
                <div className="stylist-bookapt-container">
                    <button className="stylist-bookapt-button">Book an Appointment</button>
                </div>
                <div className="stylist-carousel-container">
                    <div>Images in List Form here</div>
                </div>
                <div className="stylist-profile-container">
                    <div>Stylist Profile Image Here</div>
                    <div>Average Rating and Profile Information Here</div>
                </div>
                <div>
                    <ReviewIndexContainer/>
                </div>
            </div>
        )
    }
}

export default StylistProfile
import React from 'react'
import { Link } from 'react-router-dom'
// import { Link } from 'react-router-dom'
import ReviewIndexContainer from '../reviews/review_index_container'
import vern25 from './vern25.png'

class StylistProfile extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        // this.props.fetchStylesfromStylist(this.props.match.params.stylistId)
        this.props.fetchStylist(this.props.match.params.stylistId)
        this.props.fetchReviewsFromStylist(this.props.match.params.stylistId)
        // console.log(this.props)
        // this.props.fetchStylists()
    }

    render() {
        if (!this.props.stylist) return null
        return (
            <div className="profile-page">
            <div className="stylist-bookapt-container">
                <Link to = {`/appointments/create/${this.props.match.params.stylistId}`} className="stylist-bookapt-button">Book an Appointment with {this.props.stylist.firstName}</Link>
                <div className="stylist-carousel-container"></div>
                <div className="stylist-profile-container">
                    <div className="stylist-name">{this.props.stylist.firstName}</div>
                    <div className="stylist-profile-info-container">
                    <img className="stylist-pic" src={vern25}/>
                    <div className="stylist-rating"><span className="star">★ </span>11.3/10</div>
                    <div className="stylist-info">
                        <ul>
                            <li>Name: {this.props.stylist.firstName} {this.props.stylist.lastName}</li>
                            <li>Email: {this.props.stylist.email}</li>
                            <li>Phone Number: {this.props.stylist.phoneNumber}</li>
                            <li>Store Address: {this.props.stylist.address}</li>
                        </ul>
                    </div>

                    </div>
                </div>
                <div className="stylist-reviews-title">{this.props.stylist.firstName}'s Reviews</div>
                    <ReviewIndexContainer stylist={this.props.stylist} reviews={this.props.reviews}/>
            </div>
            </div>
        )
    }
}

export default StylistProfile
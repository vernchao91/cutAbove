import React from 'react'
import { Link } from 'react-router-dom'
// import { Link } from 'react-router-dom'
import ReviewIndexContainer from '../reviews/review_index_container'
import demoProfilePic from '../popular_items/popular_components/hairstyles/3-brunette-shag-for-long-hair-CPusXsXjjgl.jpeg'

class UserProfile extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchReviewsFromUser(this.props.match.params.userId)
    }

    render() {
        return (
            <div className="user-profile-page">
                <div className="user-profile-container">
                    <img className= "profile-pic" src={demoProfilePic} />
                    <button className="profile-pic-btn"> Upload/Change Profile Image</button>
                    <div className="stylist-info">
                        <ul>
                            <li>Name: {this.props.user.firstName} {this.props.user.lastName}</li>
                            <li>Handle: {this.props.user.handle}</li>
                            <li>Email: {this.props.user.email}</li>
                            <li></li>
                        </ul>
                </div>
                    <div className="user-profile-titles">
                        <div className="reviews-container">
                            <div className="user-reviews-title">{this.props.user.firstName}'s Reviews</div>
                                {Object.values(this.props.reviews).length !== 0 ?
                                    <ReviewIndexContainer user={this.props.user} reviews={this.props.reviews}/> : <div>You haven't made any reviews yet!</div>}
                            </div>
                            {/* <div className="user-appointments-title">{this.props.user.firstName}'s Appointments</div> */}
                        </div>

                </div>
                
            </div>
        )
    }
}

export default UserProfile
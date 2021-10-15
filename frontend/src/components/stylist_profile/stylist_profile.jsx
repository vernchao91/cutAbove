import React from 'react'
import { Link } from 'react-router-dom'
// import { Link } from 'react-router-dom'
import ReviewIndexContainer from '../reviews/review_index_container'
import ReviewFormContainer from '../review/review_form_container'
import vern25 from './vern25.png'
import reviewIcon from '../review/review_icon.png'
import style1 from './stylist_haircuts/9f47865469d56f3a254e37e925cbd940.jpg'
import style2 from './stylist_haircuts/download-1.jpg'
import style3 from './stylist_haircuts/download.jpg'
import style4 from './stylist_haircuts/images-1.jpg'
import style5 from './stylist_hairstyles/download-1.jpg'
import style6 from './stylist_hairstyles/download.jpg'
import style7 from './stylist_hairstyles/Hairstyles-for-Women-Over-50-With-Highlights-37.jpg'
import style8 from './stylist_hairstyles/lob-cut-with-copper-highlights-500x500.jpg'
import karrie from './featured-stylist.jpg'

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

    // componentWillUpdate(){
    //     this.props.fetchReviewsFromStylist(this.props.match.params.stylistId)
    // }

    render() {
        if (!this.props.stylist) return null
        return (
            <div className="profile-page">
            <div className="stylist-bookapt-container">
                <Link to = {`/appointments/create/${this.props.match.params.stylistId}`} className="stylist-bookapt-button">Book an Appointment with {this.props.stylist.firstName}</Link>
                <div className="stylist-carousel-container">
                    {this.props.stylist.firstName == "Vern da Goat" ? <img className="stylist-work" src={style1}/> : <img className="stylist-work" src={style5}/>}
                    {this.props.stylist.firstName == "Vern da Goat" ? <img className="stylist-work" src={style2}/> : <img className="stylist-work" src={style6}/>}
                    {this.props.stylist.firstName == "Vern da Goat" ? <img className="stylist-work" src={style3}/> : <img className="stylist-work" src={style7}/>}
                    {this.props.stylist.firstName == "Vern da Goat" ? <img className="stylist-work" src={style4}/> : <img className="stylist-work" src={style8}/>}
                </div>
                <div className="stylist-profile-container">
                    <div className="stylist-name">{this.props.stylist.handle}</div>
                    <div className="stylist-profile-info-container">
                    {this.props.stylist.firstName == "Vern da Goat" ? <img className="stylist-pic" src={vern25}/> : <img className="stylist-pic" src={karrie}/>}
                    <div className="stylist-rating">{this.props.stylist.firstName == "Vern da Goat" ? <><img className="review-icon" src={reviewIcon}/><div> 4.9/5</div></> : <><img className="review-icon" src={reviewIcon}/><div> 4.4/5</div></>}</div>
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
                <div className="stylist-reviews-title">{this.props.stylist.handle}'s Reviews</div>
                {Object.values(this.props.reviews).length !== 0 ?  
                    <ReviewIndexContainer stylist={this.props.stylist} reviews={this.props.reviews}/> : <div>This stylist does not have any reviews! Write one for them</div>}
                <Link to = {`/reviews/create/${this.props.match.params.stylistId}`} className="stylist-bookapt-button">Write Review for {this.props.stylist.handle}</Link>
            </div>
            </div>
        )
    }
}

export default StylistProfile
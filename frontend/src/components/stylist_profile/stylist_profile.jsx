import React from 'react'
import { Link } from 'react-router-dom'
import { uploadImage } from "../../actions/image_action"
import ReviewIndexContainer from '../reviews/review_index_container'
import reviewIcon from '../review/review_icon.png'
// import ReviewFormContainer from '../review/review_form_container'
// import vern25 from './vern25.png'
// import style1 from './stylist_haircuts/9f47865469d56f3a254e37e925cbd940.jpg'
// import style2 from './stylist_haircuts/download-1.jpg'
// import style3 from './stylist_haircuts/download.jpg'
// import style4 from './stylist_haircuts/images-1.jpg'
// import style5 from './stylist_hairstyles/download-1.jpg'
// import style6 from './stylist_hairstyles/download.jpg'
// import style7 from './stylist_hairstyles/Hairstyles-for-Women-Over-50-With-Highlights-37.jpg'
// import style8 from './stylist_hairstyles/lob-cut-with-copper-highlights-500x500.jpg'
// import karrie from './featured-stylist.jpg';

class StylistProfile extends React.Component {

    // constructor(props) {
    //     super(props)
    // }

    componentDidMount() {
        // this.props.fetchStylesfromStylist(this.props.match.params.stylistId)
        this.props.fetchStylist(this.props.match.params.stylistId)
        this.props.fetchReviewsFromStylist(this.props.match.params.stylistId)
        this.props.fetchStylesFromStylist(this.props.match.params.stylistId)
    }

    componentWillUnmount() {
        this.props.clearStyles();
    }

    sessionCheck() {
        
    }

    async handleImageSubmit(e) {
        e.preventDefault();
        const {file, description} = this.state;
        let result = null;
    
        if (file) {
          result = await uploadImage({image: file, description});
          this.setState( {imageUrl: `/api/images/${result.imagePath}`} )
        }
    }

    // componentWillUpdate(){
    //     this.props.fetchReviewsFromStylist(this.props.match.params.stylistId)
    // }

    // displayStyles() {
    //     if (Object.values(this.props.styles).length !== 0) {
    //         return (
    //         {this.props.styles.map((style, i) => (
    //             <img className="stylist-work" src={style.imageUrl}/>
    //         ))}
    //         )
    //     }

    // }

    avgRatingPerStylist(){
        let stylistRatings = []
        Object.values(this.props.reviews).map((review) => {
            if (review.stylistId == this.props.match.params.stylistId) {
                stylistRatings.push(review.rating)
            }
        })
        let total = stylistRatings.reduce((a, b) => a + b, 0)
        let avg = total / stylistRatings.length
        avg = Math.round(avg * 10) / 10
        if (!avg) return (<div className="splash-rating">Not yet rated</div>)
        return (<><br /><img className="review-icon" src={reviewIcon}/><br />{avg}/5</>)
    }

    render() {
        if (!this.props.stylist) return null
        return (
            <div className="profile-page">
                        {/* <Link to = "/stylists/index" className = "">Search more Stylists</Link> */}

            <div className="stylist-bookapt-container">
                <Link to = {`/appointments/create/${this.props.match.params.stylistId}`} className="stylist-bookapt-button">Book Appointment with {this.props.stylist.firstName}</Link>
                <div className="stylist-carousel-container">
                    {Object.values(this.props.styles).length !== 0 ?  
                    Object.values(this.props.styles).map((style, i) => (
                        <img className="stylist-work" src={style.imageUrl} key={i}/>
                    )) : <div>This Stylist has no posts yet, check back later! </div>}
                    {/* {this.props.stylist.firstName === "Vern da Goat" ? <img className="stylist-work" src={style1} alt = "Hich i have no clue why you did this"/> : <img className="stylist-work" src={style5} alt = "hairstyle1"/>}
                    {this.props.stylist.firstName === "Vern da Goat" ? <img className="stylist-work" src={style2} alt = "Hich i have no clue why you did this"/> : <img className="stylist-work" src={style6} alt = "hairstyle1"/>}
                    {this.props.stylist.firstName === "Vern da Goat" ? <img className="stylist-work" src={style3} alt = "Hich i have no clue why you did this"/> : <img className="stylist-work" src={style7} alt = "hairstyle1"/>}
                    {this.props.stylist.firstName === "Vern da Goat" ? <img className="stylist-work" src={style4} alt = "Hich i have no clue why you did this"/> : <img className="stylist-work" src={style8} alt = "hairstyle1"/>} */}
                </div>
                <div className="stylist-profile-container">
                    <div className="stylist-name">{this.props.stylist.handle}</div>
                    <div className="stylist-profile-info-container">
                    <img className="stylist-pic" src={this.props.stylist.imageUrl}/>
                    <div className="stylist-rating">
                        {this.avgRatingPerStylist()}
                    </div>
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
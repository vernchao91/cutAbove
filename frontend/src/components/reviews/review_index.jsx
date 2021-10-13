import React from 'react'
import ReviewItem from './review_item'
// import ReviewForm from './review_form'

class ReviewIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="reviews-container">
                <div className="review-upper">
                    {/* <ReviewForm user={this.props.user} movie={this.props.stylist}/> */}
                </div>
                <div className="reviews">
                    {this.props.reviews.map((review, i) => (
                        <ReviewItem key={i} review={review}/>
                    ))}
                </div>
            </div>
        )
    }
}

export default ReviewIndex


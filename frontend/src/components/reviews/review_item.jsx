import React from 'react'
// import { Link } from 'react-router-dom'

const ReviewItem = (props) => {
    return (
            <div className="review-item-container">
            <h2 className="review-heading">
                <div className="review-rating"> <img id='rating-item-index-icon' src={'https://raw.githubusercontent.com/acrks/cutAbove/main/frontend/src/components/review/review_icon.png'} width='10' height='10'/> {props.review.rating} / 10</div>
                <div className="review-title">{props.review.title}</div>  
            </h2>
            <p className="review-body">{props.review.body}</p>
            </div>
    )
}

export default ReviewItem

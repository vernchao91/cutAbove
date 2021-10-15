import React from 'react'
// import { Link } from 'react-router-dom'

const ReviewItem = (props) => {
    const iconNum = [...Array(props.review.rating).keys()]
    let ratingContent = []
    for (let i = 0; i < props.review.rating; i++) {
        ratingContent.push(<img id='rating-item-index-icon' src={'https://raw.githubusercontent.com/acrks/cutAbove/main/frontend/src/components/review/review_icon.png'} width='10' height='10' key = {i}/>)
    }
    return (
            <div className="review-item-container">
            <h2 className="review-heading">
                <div className="review-rating"> 
                {ratingContent}
                </div>
                <div className="review-title">{props.review.title}</div>  
            </h2>
            <p className="review-body">{props.review.body}</p>
            </div>
    )
}

export default ReviewItem

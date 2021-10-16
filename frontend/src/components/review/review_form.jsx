import React from 'react'
import StarRating from './star_rating'
// import review_icon from './review_icon.png'

class ReviewForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            clientId: this.props.user.id,
            stylistId: this.props.match.params.stylistId,
            // styleId: 0,
            title: '',
            body: '',
            rating: 1,
            // UNCOMMENT WHEN READY FOR PICTURES
            // pictureUrl: '',
            style: '',
          }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    
    componentDidMount() {
        // this.props.fetchStylist(this.props.match.params.stylistId)
        this.props.fetchStylesFromStylist(this.props.match.params.stylistId)
      }

      handleChange(field) {
        if(field === 'pictureUrl') {
          return e => {this.setState({pictureUrl: e.currentTarget.files[0]})}
        }
        return e => {this.setState({[field] : e.currentTarget.value})}
      }

      handleSubmit(e) {
        e.preventDefault()
        const appointment = Object.assign({}, this.state)
        debugger
        this.props.createReview(appointment).then(() => {
          this.setState({
            clientId: this.props.user,
            stylistId: this.props.match.params.stylistId,
            title: '',
            body: '',
            rating: 1,
            // UNCOMMENT WHEN READY FOR PICTURES
            // pictureUrl: '',
            style: '',
          })
        }
        ).then(() => this.props.history.push(`/stylists/${this.state.stylistId}`))
      }

    CustomRatingBar() {
        // console.log(ratingValue)
        return(
            <div>
                {[...Array(5)].map((star, i) =>
                    {
                        const ratingValue = i + 1;
                        return <label className = "cut-rating-container">
                            <input type = "radio" name = "rating" className = "star-radio" value = {ratingValue}
                            onClick = {this.handleChange('rating')} key= {i}/>
                            <img opacity = {0.5} className = "cut-review-icon" src = {'https://raw.githubusercontent.com/acrks/cutAbove/main/frontend/src/components/review/review_icon.png'} alt = "cutIcon here"
                            />
                            </label>
                    }
                )}
            </div>
        )
    }

    clickHandler(e, value) {
        this.setState({rating : value})
    }

    radioButtons(){
        
        let cutsFilled = value => (
            <div id='filled' onClick={ e =>this.clickHandler(e, value)} value={value} key={value}>
                <img id='small' src={'https://raw.githubusercontent.com/acrks/cutAbove/main/frontend/src/components/review/review_icon.png'} width='10' height='10'/>
            </div> 
        )
        let cutsUnfilled = value => (
            <div id='unfilled'onClick={e =>this.clickHandler(e, value)} value={value} key={value}>
                <img id='small' src={'https://raw.githubusercontent.com/acrks/cutAbove/main/frontend/src/components/review/review_icon.png'} width='10' height='10' opacity = {0.7}/> 
            </div>
        )
        let ratingContent = []
        for(let i = 0; i < this.state.rating; i++){
            ratingContent.push(cutsFilled(i))
        }
        for(let i= this.state.rating + 1; i <= 5 ; i++){
            ratingContent.push(cutsUnfilled(i))
        }
    

        return (
        <div id='interactive-rating-bar'>
            {ratingContent.map(rating => rating)}
        </div>
        )
    }



    render() {
        // console.log(this.state)
        return(

             <div>
                <form className = "appointment-form">
                  <h3 className = "appointent-form-title">Review your appointment with {this.props.stylist.handle}</h3>
                    <label className = "review-rating-number">cutAboves: {this.state.rating}/5  
                    <div className='radio-container'>
                                    {this.radioButtons()}

                                    {/* <p>{this.reviewDescription()}</p> */}
                    </div>
                    </label>
              
                    <label>Style
                    <select value = {this.state.style} className = "appointment-input-style dropdown" text-align-last = "center" onChange = {this.handleChange('title')}>
                    <option value="" disabled defaultValue className = "appoinment-style-option">Select the style you got</option>
                    {this.props.styles.map((style, i) =>
                      <option className = "appoinment-style-option" value = {style} key = {i}>{style}</option>
                    )}
                    </select>
                    </label>
                    {/* UNCOMMENT WHEN WE'RE READY FOR PICTURES */}
                      {/* <label>Reference picture
                        <input type = "file" value = {this.state.pictureUrl} onChange = {this.handleChange('pictureUrl')}/>
                      </label> */}
                    <label className ="textContainer">
                        <label>Header
                        <input type= "text" placeholder = "Give your review a header" value = {this.state.title} onChange = {this.handleChange('title')}/>
                        </label>  
                      <label>Message
                        <input type = "body" placeholder = {`How was your experience with ${this.props.stylist.handle}?`} value = {this.state.body} onChange = {this.handleChange('body')} />
                      </label>
                      </label>
                    <button onClick = {this.handleSubmit} className = "buttonforsignupform">Submit your review</button>
                </form>
              </div>
        )
    }
}

export default ReviewForm
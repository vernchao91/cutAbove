import React from 'react'

class ReviewForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            clientId: this.props.user,
            stylistId: this.props.match.params.stylistId,
            styleId: '',
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

    handleChange(field) {
        if(field === 'pictureUrl') {
          return e => {this.setState({pictureUrl: e.currentTarget.files[0]})}
        }
        return e => {this.setState({[field] : e.currentTarget.value})}
      }

      handleSubmit(e) {
        e.preventDefault()
        const appointment = Object.assign({}, this.state)
      }

    render() {
        let actualrating = this.state.rating
        let outOfFive = ''
        for(let i = 0; i < 5; i++) {
            outOfFive += <div className = "cut-review-icon"></div>
        }
        return(

             <div>
                <form className = "appointment-form">
                  <h3 className = "appointent-form-title">Review your appointment with {this.props.stylist.handle}</h3>
                    <label className = "review-rating-number">Cuts  
                        
                        <input type = "radio"></input>
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
                    <label>
                        <label>Header
                        <input type= "text" placeholder = "Give your review a header"/>
                    </label>  
                      <label>Message
                        <input type = "body" placeholder = {`How was your experience with ${this.props.stylist.handle}`} value = {this.state.message} onChange = {this.handleChange('body')} />
                      </label>
                      </label>
                    <button onClick = {this.handleSubmit} className = "buttonforsignupform">Submit your review</button>
                </form>
              </div>
        )
    }
}

export default ReviewForm
import React from 'react'
import { uploadImage } from "../../actions/image_action";
import { Link } from 'react-router-dom'
import ReviewIndexContainer from '../reviews/review_index_container'
import StyleIndexContainer from '../style_index/style_index_container';

class StylistEditProfile extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            imageUrl: "",
            id: this.props.match.params.userId
        }
        this.handleImageSubmit = this.handleImageSubmit.bind(this);
        this.fileSelected = this.fileSelected.bind(this);
    }

    componentDidMount() {
        // this.props.fetchReviewsFromStylist(this.props.user.id)
        this.props.fetchStylist(this.props.user.id)
            // .then(this.setState({user: this.props.user, imageUrl: this.props.user.imageUrl}))
    }

    async handleImageSubmit(e) {
        e.preventDefault();
        const {file, description} = this.state;
        let result = null;
    
        if (file) {
          result = await uploadImage({image: file, description});
          this.setState( {imageUrl: `/api/images/${result.imagePath}`} )
        //   console.log("result.imagepath" + result.imagePath)
          this.state.imageUrl = `/api/images/${result.imagePath}`
          const stateUser = Object.assign({}, this.state)
          this.props.updateStylist(stateUser)
        }
      }

    fileSelected(e) {
        e.preventDefault();
        const file = e.target.files[0];
            this.setState( {file: file} );
    }

    render() {
        if (this.props.user === undefined) return null
        return (
            <div className="user-profile-page">
                <div className="user-profile-container">
                    <img className= "profile-pic" src={this.props.user.imageUrl} alt="Profile Picture"/>
                    <form onSubmit={this.handleImageSubmit}>
                        <input
                        type="file"
                        onChange={this.fileSelected}
                        accept="image/*"
                        />
                        <button className="profile-pic-btn" type="submit"> Upload/Change Profile Image</button>
                    </form>
                    <div className="stylist-info">
                        <ul>
                            <li>Name: {this.props.user.firstName} {this.props.user.lastName}</li>
                            <li>Handle: {this.props.user.handle}</li>
                            <li>Email: {this.props.user.email}</li>
                            <li></li>
                        </ul>
                </div>

                <StyleIndexContainer/>
                    {/* <div className="user-profile-titles">
                        <div className="reviews-container">
                            <div className="user-reviews-title">{this.props.user.firstName}'s Reviews</div>
                                {Object.values(this.props.reviews).length !== 0 ?
                                    <ReviewIndexContainer user={this.props.user} reviews={this.props.reviews}/> : <div>You haven't made any reviews yet!</div>}
                            </div>
                            <div className="user-appointments-title">{this.props.user.firstName}'s Appointments</div>
                        </div> */}

                </div>
                
            </div>
        )
    }
}

export default StylistEditProfile
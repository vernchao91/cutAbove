import React from 'react'
import { uploadImage } from "../../actions/image_action";
import { Link } from 'react-router-dom'
import StyleIndexContainer from '../style_index/style_index_container';

class StylistEditProfile extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            imageUrl: this.props.user.imageUrl,
            id: this.props.user.id
        }
        this.handleImageSubmit = this.handleImageSubmit.bind(this);
        this.fileSelected = this.fileSelected.bind(this);
    }

    componentDidMount() {
        this.props.fetchStylist(this.props.user.id)
    }

    async handleImageSubmit(e) {
        e.preventDefault();
        const {file, description} = this.state;
        let result = null;
    
        if (file) {
          result = await uploadImage({image: file, description});
          this.setState( {imageUrl: `/api/images/${result.imagePath}`} )
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
            <div className="stylist-profile-page">
                <div className="stylist-profile-container">
                  <div className='testing-this'>
                    <img className= "stylist-profile-pic" src={this.state.imageUrl} alt="Profile Picture"/>
                    <form onSubmit={this.handleImageSubmit}>
                      <label className="select-profile-pic">
                        <input type="file" onChange={this.fileSelected} accept="image/*"/>
                        Select a Profile Picture
                      </label>
                        <button className="stylist-profile-pic-btn" type="submit"> Upload/Change Profile Image</button>
                    </form>
                  </div>
                    <div className="stylist-info">
                        <ul>
                            <li>Name: {this.props.user.firstName} {this.props.user.lastName}</li>
                            <li>Handle: {this.props.user.handle}</li>
                            <li>Email: {this.props.user.email}</li>
                            <li><Link to={`/stylists/${this.props.user.id}`}>Profile Preview</Link></li>
                        </ul>
                    </div>

                <StyleIndexContainer/>

                </div>
                
            </div>
        )
    }
}

export default StylistEditProfile
import React from 'react'
import { uploadImage } from "../../actions/image_action";
import { Link } from 'react-router-dom'
import StyleIndexContainer from '../style_index/style_index_container';

class StylistEditProfile extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            imageUrl: '',
            id: this.props.match.params.stylistId, 
            file: '',
        }
        this.handleImageSubmit = this.handleImageSubmit.bind(this);
        this.fileSelected = this.fileSelected.bind(this);
    }

    componentDidMount() {
        this.props.fetchStylist(this.props.match.params.stylistId)
          .then( () => this.setState( {imageUrl: this.props.user.imageUrl}))
    }

    async handleImageSubmit(e) {
        e.preventDefault();
        const {file, description} = this.state;
        let result = null;
    
        if (file) {
          result = await uploadImage({image: file, description});
          this.setState( {imageUrl: `/api/images/${result.imagePath}`})
          const stateUser = Object.assign({}, this.state)
          console.log(stateUser)
          this.props.updateStylist(stateUser).then( this.setState({file:''}), this.props.fetchStylist(this.props.user.id))
        }
      }

    fileSelected(e) {
        e.preventDefault();
        const file = e.target.files[0];
        this.setState( this.state.file = file );
        const reader = new FileReader();
        reader.onloadend = () => this.setState({imageUrl: reader.result })
          if (file) {
                reader.readAsDataURL(file);
          } else {
                this.setState({imageUrl: '' })
          } 
    }

    renderUploadButton() {
      if(this.state.file !== "") {
          return  <button type='submit'> Save Profile Picture </button>
      }
    }
    renderResetButton() {
      if(this.state.file !== "") {
          return (
            // <label className="stylist-profile-pic-btn" > Reset Picture
              <button type="submit" onClick={() => this.setState({imageUrl: this.props.user.imageUrl, file: ""})}>Reset Picture</button>
            // </label>
          )
      }
    }

    render() {
        if (this.props.user === undefined) return null
        return (
            <div className="stylist-profile-page">
                <div className="stylist-profile-container">
                  <div className='stylist-edit-form-container'>
                    <img className= "stylist-profile-pic" src={this.state.imageUrl} alt="Profile Picture"/>
                    <form onSubmit={this.handleImageSubmit}>

                      <label className="select-profile-pic">
                        Change Profile Picture
                        <input
                        type="file"
                         onChange={this.fileSelected} 
                         accept="image/*"/>
                      </label>
                      {this.renderUploadButton()}
                        {/* <label className="stylist-profile-pic-btn" > Upload/Change Profile Image
                          <input type="submit"/>
                        </label> */}
                    </form>
                    {this.renderResetButton()}
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
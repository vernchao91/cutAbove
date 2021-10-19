import React from "react";
import { uploadImage } from "../../actions/image_action"
// import * as ImageApiUtil from "../../util/image_api_util"

class Image extends React.Component {
  constructor(props) {
    super(props)
    this.state ={
      imageUrl: "",
      file: "",
    }
    this.handleImageSubmit = this.handleImageSubmit.bind(this);
    this.fileSelected = this.fileSelected.bind(this);
  }

  async handleImageSubmit(e) {
    e.preventDefault();
    const {file, description} = this.state;
    let result = null;

    if (file) {
      result = await uploadImage({image: file, description});
      this.setState( {imageUrl: `/api/images/${result.imagePath}`} )
      console.log(result)
    }
  }

  fileSelected(e) {
    e.preventDefault();
    const file = e.target.files[0];
		this.setState( {file: file} );
    const reader = new FileReader();
    reader.onloadend = () => this.setState( {imageUrl: reader.result} )
    if (file) {
      reader.readAsDataURL(file);
    } else {
      this.setState({ imageUrl: ""});
    }    

	}

  
  render() {
    const image = <img src="/api/images/cutabove-1634608082737.png" alt="image"></img>
    return (
      <div>
        Upload Image
        <form onSubmit={this.handleImageSubmit}>
          <input 
          type="file"
          onChange={this.fileSelected}
          accept="image/*"
          />
          <button type="submit">submit</button>
        </form>
        {/* {image} */}
        <img src={this.state.imageUrl} alt="image file"></img>
      </div>
    )
  }
}

export default Image
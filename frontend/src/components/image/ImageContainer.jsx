import React from "react";
import { uploadImage } from "../../actions/image_action"

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
        <img src={this.state.imageUrl} alt=""></img>
      </div>
    )
  }
}

export default Image
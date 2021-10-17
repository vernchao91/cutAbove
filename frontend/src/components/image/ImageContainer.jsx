import React from "react";
import { uploadImage } from "../../actions/image_action"
// import * as ImageApiUtil from "../../util/image_api_util"

class Image extends React.Component {
  constructor(props) {
    super(props)
    this.state ={
      imageUrl: "",
      caption: "",
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
	}

  // setCaption (e) {
    // e.preventDefault();
    // this.setState({ caption: e.target.value });
  // }

  render() {
    const image = <img src="/api/images/cutabove-1634449093367.png" alt="image"></img>
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
        {image}
        {/* <img src={this.state.imageUrl} alt="image"></img> */}
      </div>
    )
  }
}

export default Image
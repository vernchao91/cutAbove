import React from 'react'
import StyleIndexItem from './style_index_item'
import { uploadImage } from "../../actions/image_action";

class StyleIndex extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      imageUrl: "",
      stylistId: this.props.user.id,
      description: "",
      styleType: "",
    }

        this.handleStyleSubmit = this.handleStyleSubmit.bind(this);
        this.fileSelected = this.fileSelected.bind(this);
        this.renderForm = this.renderForm.bind(this);
  }

  componentDidMount() {
    this.props.fetchStylesFromStylist(this.props.user.id)
  }

    fileSelected(e) {
        e.preventDefault();
        const file = e.target.files[0];
            this.setState( {file: file} );
    }

    async handleStyleSubmit(e) {
        e.preventDefault()
        const {file, description} = this.state
        let result = null

        if (file) {
            result = await uploadImage({image: file, description});
            this.setState ({imageUrl: `/api/images/${result.imagePath}`})
            // this.state.imageUrl = `/api/images/${result.imagePath}`
            const stateStyle = Object.assign({}, this.state)
            console.log(stateStyle)
            this.props.createStyle(stateStyle)
              .then(() => (this.props.fetchStylesFromStylist(this.props.user.id)))
              .then(() => this.setState({
                imageUrl: "",
                stylistId: this.props.user.id,
                description: "",
                styleType: "",
              }))
        }
    }

  renderForm() {
    if (this.props.styles.length < 4) {
      return (
        <form className='style-form' onSubmit={this.handleStyleSubmit}>
          {console.log(this.state)}
          <input type="text" placeholder="describe your style" value={this.state.description} onChange={this.update('description')}/>
          <input type="text" placeholder="haircut or hairstyle?" value={this.state.styleType} onChange={this.update('styleType')}/>
        <label className='stylist-style-img-select'>
          <input type="file" onChange={this.fileSelected} accept="image/*"/>
          Choose a Reference Photo
        </label>
          <button className="style-pic-btn" type="submit"> Upload/Change Style Images</button>
        </form>
      )
    } else {
      return null
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    })
  }

  render() {
    if (!this.props.styles) {
      return null 
    } else  {
      return (
        <div>
          {this.renderForm()}
        <ul className='style-list'> 
          {
            this.props.styles.map((style, idx) => (
              <StyleIndexItem
              key = {idx}
              user = {this.props.user}
              style = { style }
              deleteStyle = {this.props.deleteStyle}
               />
            ))
          }
        </ul>
        </div>
      )
    }

  }
}

export default StyleIndex
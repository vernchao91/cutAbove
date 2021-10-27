import React from 'react' 

class StyleIndexItem extends React.Component {
  constructor(props) {
    super(props)
    
  }

  

  render() {
    return (
    <li className='style-index-item'> 
      <img className= "style-photo" src={this.props.style.imageUrl} alt="Style Photo"/>
      <p>{this.props.style.styleType}</p>
      <p>{this.props.style.description}</p>
      <p>{this.props.style.price}</p>
      <button onClick={() => this.props.deleteStyle(this.props.style._id)}>Delete Style</button>
    </li>
    )
  }

}

export default StyleIndexItem
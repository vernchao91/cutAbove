import React from 'react'
import StyleIndexItem from './style_index_item'

class StyleIndex extends React.Component {
  constructor(props) {
    super(props)

    this.props.fetchStylesFromStylist(this.props.user.id)
  }

  render() {
    if (!this.props.styles) {
      return null 
    } else  {
      return (
        <ul className='style-list'> 
          {
            this.props.styles.map( (style, idx) => (
              <StyleIndexItem
              key = {idx}
              user = {this.props.user}
              style = { style }
              deleteStyle = {this.props.deleteStyle}
               />
            ))
          }
        </ul>
      )
    }

  }
}

export default StyleIndex
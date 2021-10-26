import React from 'react'
import StyleIndexItem from './style_index_item'

class StyleIndex extends React.Component {
  constructor(props) {
    super(props)

    this.props.fetchStylesFromStylist(this.props.stylist.id)
    console.log(this.props)
  }

  // componentDidMount() {
  //   if (!this.props.styles) {
  //     this.props.fetchStylesFromStylist(this.props.stylist.id)
  //   } else {
  //     this.props.fetchStylesFromStylist(this.props.stylist.id)
  //   }
  //   console.log(this.props)
  // }

  render() {
    if (!this.props.styles) {
      return null 
    } else  {
      console.log(this.props)
      return (
        <ul> HERE IT IS
          {
            this.props.styles.map( (style, idx) => (
              <StyleIndexItem
              key = {idx}
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
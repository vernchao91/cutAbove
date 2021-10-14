import React from 'react';
import StylistIndexItem from './stylist_list_item'

class StylistsIndex extends React.Component {
  constructor(props){
    super(props)

    // this.renderIndex = this.renderIndex.bind(this)
  }

  componentDidMount() {
    this.props.fetchStylists()
    // console.log(this.props)
  }

  render() {
    // debugger
    if (!this.props.stylists) {
      return null
    } else {

    // let anything = this.renderIndex()
    return (
      <div className='stylists-index-container'>
        <ul className='stylist-list'>
          {
            // console.log(this.props.stylists)
            this.props.stylists.map( (stylist, i) => <StylistIndexItem key={i} stylist={stylist}/> )
          }
        </ul>
      </div>
    )
  }
  }
}

export default StylistsIndex
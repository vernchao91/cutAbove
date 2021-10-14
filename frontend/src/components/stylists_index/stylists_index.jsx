import React from 'react';
import StylistIndexItem from './stylist_list_item'

class StylistsIndex extends React.Component {
  constructor(props){
    super(props)
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

    return (
      <div className='stylists-index-container'>
        <ul className='stylist-list'>
          {
            // console.log(this.props.stylists)
            this.props.stylists.map( (stylist, index) => <StylistIndexItem key={index} stylist={stylist}/> )
          }
        </ul>
      </div>
    )
  }
  }
}

export default StylistsIndex
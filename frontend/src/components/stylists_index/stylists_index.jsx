import React from 'react';
import StylistIndexItem from './stylist_list_item'

class StylistsIndex extends React.Component {
  // constructor(props){
  //   super(props)

  //   // this.renderIndex = this.renderIndex.bind(this)
  // }

  componentDidMount() {
    this.props.fetchStylists()
    // console.log(this.props)
  }

  componentWillUnmount() {
    // this.props.stylists = Object.assign({})
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
            this.props.stylists.map( (stylist, i) => <StylistIndexItem key={i} stylist={stylist}/> )
          }
        </ul>
      </div>
    )
  }
  }
}

export default StylistsIndex
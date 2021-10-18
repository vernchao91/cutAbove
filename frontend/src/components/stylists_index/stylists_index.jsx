import React from 'react';
import StylistIndexItem from './stylist_list_item'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/fontawesome-free-solid'
// import {useState} from 'react'

class StylistsIndex extends React.Component {
  constructor(props){
    super(props)
    this.state = {search: ''}
    // this.renderIndex = this.renderIndex.bind(this)
    this.updateSearch = this.updateSearch.bind(this)
  }

  componentDidMount() {
    this.props.fetchStylists()
    // console.log(this.props)
  }

  componentWillUnmount() {
    // this.props.stylists = Object.assign({})
  }

  updateSearch(e) {
    this.setState({search: e.target.value})
  }

  render() {
    const searchTerm = this.state.search
    // debugger
    if (!this.props.stylists) {
      return null
    } else {

    return (
      <div className='stylists-index-container'>
        <div className="search-box">
              <button class="btn-search"><FontAwesomeIcon class="fas fa-search" icon={faSearch}/></button>
        <input className = "input-search" type="text" placeholder="search for a stylist..." onChange={this.updateSearch}/>
        </div>
        <div class="search"></div>
        <ul className='stylist-list'>
          {
            this.props.stylists.filter((val) => {
              if (searchTerm === '') {
                return val
              } else if (val.handle.toLowerCase().includes(searchTerm.toLowerCase()) || val.firstName.toLowerCase().includes(searchTerm.toLowerCase()))
                return val
            }).map( (stylist, i) => <StylistIndexItem key={i} stylist={stylist}/> )
          }
        </ul>
      </div>
    )
  }
  }
}

export default StylistsIndex
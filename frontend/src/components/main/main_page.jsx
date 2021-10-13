import React from 'react';
import { Link } from 'react-router-dom';
import FeaturedStylist from '../featured_stylist/featured_stylist_container';
import PopularContainer from '../popular_items/popular_components/popular_items'
// import SearchBarContainer from '../search_bar/search_bar_container'

class MainPage extends React.Component {

  render() {
    return (
      <div className = "splashPage">
        <div className = "book-appointment"></div>
        <div className = "search-bar-container"><Link to = "/appointments" className = "book-appointment-button">Book Appointment</Link></div>
        <FeaturedStylist />
        <div className = "popular-elements-container">
        <PopularContainer />
        <div className = "trending-haircuts">Trending Hairstyles</div>
        <PopularContainer />
        </div>
      </div>
    );
  }
}

export default MainPage;
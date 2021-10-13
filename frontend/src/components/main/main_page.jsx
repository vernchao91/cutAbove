import React from 'react';
import { Link } from 'react-router-dom';
import FeaturedStylist from '../featured_stylist/featured_stylist_container';
import PopularContainer from '../popular_items/popular_components/popular_items'

class MainPage extends React.Component {

  render() {
    return (
      <div className = "splashPage">
        <div className = "book-appointment"><Link to = "/appointments" className = "book-appointment-button">Book Appointment</Link></div>
        <div className = "search-bar-container"><div className = "search-bar">Search Bar</div></div>
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
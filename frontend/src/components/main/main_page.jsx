import React from 'react';
import { Link } from 'react-router-dom';
import FeaturedStylist from '../featured_stylist/featured_stylist_container';
import PopularHaircuts from '../popular_items/popular_components/popular_haircuts'
import PopularHairstyles from '../popular_items/popular_components/popular_hairstyles'
// import SearchBarContainer from '../search_bar/search_bar_container'
import barbershop from './barbershop.jpeg'
import salon from './salon.jpeg'

class MainPage extends React.Component {


  render() {
    return (
      <div className = "splashPage">
        {/* <div className = "search-bar-container"><Link to = "/stylists/index" className = "book-appointment-button">Find Stylists</Link></div> */}
        <div className="main-page-pics">
          <img className="salon" src={salon}/>
          <img className="barbershop" src={barbershop}/>
        </div>
        <Link to = "/stylists/index" className = "book-appointment-button">Find Stylists</Link>
        <FeaturedStylist />
        <div className="splash-hair-index">
          <div className = "splash-mens-haircuts">
            <div className="popular-title">Popular<br/> Haircuts</div>
            <PopularHaircuts />
          </div>
        {/* <div className = "trending-haircuts">Trending Hairstyles</div> */}
          <div className = "splash-womens-hairstyles">
            <div className="popular-title">Popular<br/> Hairstyles</div>
            <PopularHairstyles />
          </div>
        </div>
      </div>
    );
  }
}

export default MainPage;
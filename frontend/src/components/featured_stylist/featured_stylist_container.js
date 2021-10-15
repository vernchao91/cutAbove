import { connect } from 'react-redux';
import { fetchStylists } from '../../actions/stylist_actions';
// import React from "react";
import FeaturedStylist from './featured_stylist'

const mapStateToProps = (state) => ({
    stylists: Object.values(state.entities.stylists)
})


const mapDispatchToProps = (dispatch) => ({
    fetchStylists:()=> dispatch(fetchStylists())
})

export default connect(mapStateToProps, mapDispatchToProps)(FeaturedStylist)
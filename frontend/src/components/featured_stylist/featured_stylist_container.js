import { connect } from 'react-redux';
import { fetchStylists, fetchStylist } from '../../actions/stylist_actions';
// import React from "react";
import FeaturedStylist from './featured_stylist'

const mapStateToProps = (state) => ({
    stylists: Object.values(state.entities.stylists)
})


const mapDispatchToProps = (dispatch) => ({
    fetchStylists:()=> dispatch(fetchStylists()),
    fetchStylist: userId => dispatch(fetchStylist(userId))
})

export default connect(mapStateToProps, mapDispatchToProps)(FeaturedStylist)
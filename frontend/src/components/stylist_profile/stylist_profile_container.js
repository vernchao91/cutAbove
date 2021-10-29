import {connect} from 'react-redux'
import { fetchStylesFromStylist, clearStyles } from '../../actions/style_actions'
import {fetchStylist, fetchStylists } from '../../actions/stylist_actions'
import { fetchReviewsFromStylist } from '../../actions/review_actions'
import StylistProfile from './stylist_profile'


const mapStateToProps = (state, ownProps) => {
    return {
        stylist: state.entities.stylists,
        reviews: state.entities.reviews,
        styles: state.entities.styles
    }
}

const mapDispatchToProps = dispatch => ({
    //needs to fetch stylist, stylists styles,
    fetchStylists: () => dispatch(fetchStylists()),
    fetchStylist: (stylistId) => dispatch(fetchStylist(stylistId)),
    fetchReviewsFromStylist:(stylistId) => dispatch(fetchReviewsFromStylist(stylistId)),
    fetchStylesFromStylist: (stylistId) => dispatch(fetchStylesFromStylist(stylistId)),
    clearStyles: () => dispatch(clearStyles())
})

export default connect(mapStateToProps, mapDispatchToProps)(StylistProfile)
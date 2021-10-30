import { connect } from 'react-redux'
import { fetchStylist, updateStylist } from '../../actions/stylist_actions'
// import { fetchReviewsFromStylist } from '../../actions/review_actions'

import StylistEditProfile from './stylist_edit_profile'


const mapStateToProps = (state, ownProps) => {
    return {
        user: state.entities.stylists
    }
}

const mapDispatchToProps = dispatch => {
    return {
        // fetchReviewsFromStylist:(stylistId) => dispatch(fetchReviewsFromStylist(stylistId)),
        fetchStylist: stylistId => dispatch(fetchStylist(stylistId)),
        updateStylist: stylist => dispatch(updateStylist(stylist))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StylistEditProfile)
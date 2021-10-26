import { connect } from 'react-redux'
import { fetchStylist, updateStylist } from '../../actions/stylist_actions'
// import { fetchReviewsFromStylist } from '../../actions/review_actions'

import StylistEditProfile from './stylist_edit_profile'
import { createStyle } from '../../actions/style_actions'


const mapStateToProps = (state, ownProps) => {
    return {
        user: state.session.user,
        reviews: state.entities.reviews
    }
}

const mapDispatchToProps = dispatch => {
    return {
        // fetchReviewsFromStylist:(stylistId) => dispatch(fetchReviewsFromStylist(stylistId)),
        fetchStylist: stylistId => dispatch(fetchStylist(stylistId)),
        updateStylist: stylist => dispatch(updateStylist(stylist)),
        createStyle: style => dispatch(createStyle(style))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StylistEditProfile)
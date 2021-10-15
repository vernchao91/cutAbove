import {connect} from 'react-redux'
import { fetchReviewsFromUser} from '../../actions/review_actions'
import UserProfile from './user_profile'


const mapStateToProps = (state) => {
    return {
        user: state.session.user,
        reviews: state.entities.reviews
    }
}

const mapDispatchToProps = dispatch => ({
    fetchReviewsFromUser:(userId) => dispatch(fetchReviewsFromUser(userId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile)
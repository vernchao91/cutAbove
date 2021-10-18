import {connect} from 'react-redux'
import { fetchReviewsFromUser} from '../../actions/review_actions'
import { updateClient, fetchClient } from "../../actions/client_actions"
import UserProfile from './user_profile'


const mapStateToProps = (state, ownProps) => {
    return {
        user: state.entities.clients,
        reviews: state.entities.reviews
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchReviewsFromUser:(userId) => dispatch(fetchReviewsFromUser(userId)),
        fetchClient:clientId => dispatch(fetchClient(clientId)),
        updateClient: client => dispatch(updateClient(client))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile)
import { connect } from 'react-redux';
import ReviewIndex from './review_index';
import { fetchReviewsFromStylist } from '../../actions/review_actions';

const mapStateToProps = (state) => {
    return {reviews: Object.values(state.entities.reviews)}
};
const mapDispatchToProps = dispatch => ({
    fetchReviewsFromStylist:(stylistId) => dispatch(fetchReviewsFromStylist(stylistId))
});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewIndex);


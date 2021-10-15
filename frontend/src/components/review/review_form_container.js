// import { connect } from "react-redux";
// import { createReview } from "../../actions/review_actions";
// import { fetchStylesFromStylist } from '../../actions/style_actions';
// import { fetchStylist } from '../../actions/stylist_actions';
// import ReviewForm from './review_form';

// const mapStateToProps = state => ({
//     user: state.session.user,
//     stylist: state.entities.stylists,
//     styles: Object.values({}, state.entities.stylists.styles)
    
// })

// const mapDispatchToProps = dispatch => ({
//     createReview: review => dispatch(createReview(review)),
//     fetchStylist: (stylistId) => dispatch(fetchStylist(stylistId)),
//     fetchStylesFromStylist: (stylistId) => dispatch(fetchStylesFromStylist(stylistId))
// })

// export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm)
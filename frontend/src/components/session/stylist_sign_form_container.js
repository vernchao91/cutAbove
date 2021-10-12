import { connect } from 'react-redux';
import { signupStylist } from '../../actions/session_actions';
import SignupForm from './stylist_signup_form';

const mapStateToProps = (state) => {
  return {
    signedIn: state.session.isSignedIn,
    errors: state.errors.session
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signupStylist: user => dispatch(signupStylist(user))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupForm);
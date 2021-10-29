import { connect } from 'react-redux';
import { login, loginStylist, signup, signupStylist } from '../../actions/session_actions';
import SignupForm from './signup_form';
import { closeModal } from '../../actions/modal_actions';


const mapStateToProps = (state) => {
  return {
    formType: 'signup',
    signedIn: state.session.isSignedIn,
    errors: state.errors.session,
    user: state.session.user
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signup: user => dispatch(signup(user)),
    login: user => dispatch(login(user)),
    stylistLogin: user => dispatch(loginStylist(user)),
    stylistSignup: user => dispatch(signupStylist(user)),
    closeModal: () => dispatch(closeModal())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupForm);
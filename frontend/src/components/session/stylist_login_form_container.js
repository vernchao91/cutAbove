import { connect } from 'react-redux';
import { loginStylist } from '../../actions/session_actions';
import StylistLoginForm from './stylist_login_form';

const mapStateToProps = (state) => {
  return {
    errors: state.errors.session
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginStylist: user => dispatch(loginStylist(user))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StylistLoginForm);
import { connect } from 'react-redux';
import { login, loginStylist } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

import LoginForm from './login_form';

const mapStateToProps = (state) => {
  return {
    formType: 'login',
    otherFormType: 'signup',
    errors: state.errors.session
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: user => dispatch(login(user)),
    stylistLogin: user => dispatch(loginStylist(user)),
    closeModal: () => dispatch(closeModal())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
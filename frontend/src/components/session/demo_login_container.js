import { connect } from "react-redux"
import DemoLogin from './demo_login'
import { login } from "../../actions/session_actions"

const mapStateToProps = (state) => {

}

const mapDispatchToProps = (dispatch) => ({
    login: user => dispatch(login(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(DemoLogin)
import {connect} from 'react-redux'
import { fetchStylesFromStylist } from '../../actions/style_actions'
//import {fetchStylist } from ''
import StylistProfile from './stylist_profile'


const mapStateToProps = (state, ownProps) => {
    return {
        stylist: state.entities.stylist[ownProps.match.params.stylistId],
        client: state.entities.users[state.session.id],
    }
}

const mapDispatchToProps = dispatch => ({
    //needs to fetch stylist, stylists styles,
    // fetchStylist: (stylistId) => dispatch(fetchStylist(stylistId)),
    fetchStylesFromStylist: (stylistId) => dispatch(fetchStylesFromStylist(stylistId))
})

export default connect(mapStateToProps, mapDispatchToProps)(StylistProfile)
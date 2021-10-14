import { fetchStylists } from "../../actions/stylist_actions";
import StylistsIndex from './stylists_index'
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
  stylists: Object.values(state.entities.stylists)
})

const mapDispatchToProps = (dispatch) => ({
  fetchStylists: () => dispatch(fetchStylists())
})

export default connect(mapStateToProps, mapDispatchToProps)(StylistsIndex)
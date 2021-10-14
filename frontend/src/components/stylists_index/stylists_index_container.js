import { fetchStylists } from "../../actions/stylist_actions";
import StylistsIndex from './stylists_index'
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
  stylists: state.entities.stylists.data 
})

const mapDispatchToProps = (dispatch) => ({
  fetchStylists: () => dispatch(fetchStylists())
})

export default connect(mapStateToProps, mapDispatchToProps)(StylistsIndex)
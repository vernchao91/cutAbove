import { connect } from 'react-redux';
import { fetchStylesFromStylist, deleteStyle } from '../../actions/style_actions'
import StyleIndex from './style_index';

const mapStateToProps = (state) => ({
  stylist: state.session.user,
  styles: Object.values(state.entities.styles)
})

const mapDispatchToProps = dispatch => ({
  fetchStylesFromStylist: (stylistId) => dispatch(fetchStylesFromStylist(stylistId)),
  deleteStyle: (styleId) => dispatch(deleteStyle(styleId))
})

export default connect(mapStateToProps, mapDispatchToProps)(StyleIndex)
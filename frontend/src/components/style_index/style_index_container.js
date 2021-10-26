import { connect } from 'react-redux';
import { fetchStylesFromStylist, deleteStyle, createStyle } from '../../actions/style_actions'
import StyleIndex from './style_index';

const mapStateToProps = (state) => ({
  user: state.session.user,
  styles: Object.values(state.entities.styles)
})

const mapDispatchToProps = dispatch => ({
  fetchStylesFromStylist: (stylistId) => dispatch(fetchStylesFromStylist(stylistId)),
  deleteStyle: (styleId) => dispatch(deleteStyle(styleId)),
  createStyle: (style) => dispatch(createStyle(style))
})

export default connect(mapStateToProps, mapDispatchToProps)(StyleIndex)
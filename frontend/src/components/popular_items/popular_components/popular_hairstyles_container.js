import { connect } from 'react-redux';
import PopularHairstyles from "./popular_hairstyles"
import { fetchStyles } from "../../../actions/style_actions"

const mapStateToProps = state => {
  return {
    styles: Object.values(state.entities.styles)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchStyles: () => dispatch(fetchStyles())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PopularHairstyles);
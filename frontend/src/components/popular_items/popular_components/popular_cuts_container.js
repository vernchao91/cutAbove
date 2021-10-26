import { connect } from 'react-redux';
import PopularHaircuts from "./popular_haircuts"
import { fetchStyles } from "../../../actions/style_actions"

// const mapStateToProps = state => {
//   return {

//   }
// }

const mapDispatchToProps = dispatch => {
  return {
    fetchStyles: () => dispatch(fetchStyles())
  }
}

export default connect(null, mapDispatchToProps)(PopularHaircuts);

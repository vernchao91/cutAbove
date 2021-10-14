import { connect } from 'react-redux';
import { stylistSearch } from '../../actions/stylist_actions';
import Search from './search_bar'

const mapStateToProps = (state) => ({
    stylists: Object.values(state.entities.stylists) 
});
const mapDispatchToProps = dispatch => ({
    stylistSearch: (query) => dispatch(stylistSearch(query))
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
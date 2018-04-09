import { connect } from 'react-redux';
import FilterBar from '../components/FilterBar.js';

const mapStateToProps = (state, ownProps) => {console.log(state); return {
	nClass: state.moveCard.nClass
}};

const mapDispatchToProps = (dispatch, ownProps) => { return {
}};

const FilterBarContainer = connect(mapStateToProps, mapDispatchToProps)(FilterBar);

export default FilterBarContainer;
import { connect } from 'react-redux';
import { moveCardsRight, filterCardsByClass, getCards } from '../actions/actions.js';
import Header from '../components/Header.js';

const mapStateToProps = (state, ownProps) => { return {
	shouldMove: state.moveCard,
	currClassFilter: state.filterCard.classFilter
}};

const mapDispatchToProps = (dispatch, ownProps) => { return {
	moveCards: (shouldMove) => {
		dispatch(moveCardsRight(shouldMove));
	},

	filterCardsClass: (classFilter) => {
		dispatch(filterCardsByClass(classFilter));
		dispatch(getCards());
	}
}};

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);

export default HeaderContainer;
import { connect } from 'react-redux';
import { moveCardsRight } from '../actions/actions.js';
import Header from '../components/Header.js';

const mapStateToProps = (state, ownProps) => {console.log(state); return {
	shouldMove: state.moveCard
}};

const mapDispatchToProps = (dispatch, ownProps) => { return {
	moveCards: (shouldMove) => {
		dispatch(moveCardsRight(shouldMove))
	}
}};

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);

export default HeaderContainer;
import { connect } from 'react-redux';
import App from '../components/App.js';

const mapStateToProps = (state, ownProps) => { return {
	cardList: state.cardList.listOfCards,
	isFetching: state.cardList.isFetching
}};

const mapDispatchToProps = (dispatch, ownProps) => { return {
}};

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
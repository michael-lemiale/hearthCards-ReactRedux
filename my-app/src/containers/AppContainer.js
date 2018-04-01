import { connect } from 'react-redux';
import App from '../containers/App.js';

const mapStateToProps = (state, ownProps) => { return {
	cardList: state.listOfCards
}};

const mapDispatchToProps = (dispatch, ownProps) => { return {
}};

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
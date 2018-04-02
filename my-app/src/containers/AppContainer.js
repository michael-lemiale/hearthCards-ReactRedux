import { connect } from 'react-redux';
import App from '../components/App.js';

const mapStateToProps = (state, ownProps) => {console.log(state); return {
	cardList: state.cardList.listOfCards
}};

const mapDispatchToProps = (dispatch, ownProps) => { return {
}};

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
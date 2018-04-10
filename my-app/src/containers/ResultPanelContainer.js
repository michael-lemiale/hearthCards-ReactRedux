import { connect } from 'react-redux';
import ResultPanel from '../components/ResultPanel.js';

const mapStateToProps = (state, ownProps) => { return {
	nClass: state.moveCard.nClass
}};

const mapDispatchToProps = (dispatch, ownProps) => { return {
}};

const ResultPanelContainer = connect(mapStateToProps, mapDispatchToProps)(ResultPanel);

export default ResultPanelContainer;
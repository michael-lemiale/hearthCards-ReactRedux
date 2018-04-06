import { connect } from 'react-redux';
import ResultPanel from '../components/ResultPanel.js';

const mapStateToProps = (state, ownProps) => {console.log(state); return {
}};

const mapDispatchToProps = (dispatch, ownProps) => { return {
}};

const ResultPanelContainer = connect(mapStateToProps, mapDispatchToProps)(ResultPanel);

export default ResultPanelContainer;
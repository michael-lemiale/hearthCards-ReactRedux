import { combineReducers } from 'redux';

import { FETCH_CARDS_REQUEST,
		 FETCH_CARDS_SUCCESS,
		 FETCH_CARDS_ERROR,
		 MOVE_CARDS_RIGHT,
		 FILTER_CARDS_BY_CLASS } from '../actions/actions.js'

function cardList(state = {listOfCards:[], isFetching: false, error: ''}, action) {
	switch (action.type) {
		case FETCH_CARDS_REQUEST:
			return Object.assign({}, state, {isFetching: true, listOfCards: [], error: ''});
			break;
		case FETCH_CARDS_SUCCESS:
			return Object.assign({}, state, {isFetching: false, listOfCards: action.listOfCards, error: ''});
			break;
		case FETCH_CARDS_ERROR:
			return Object.assign({}, state, {isFetching: false, listOfCards: [], error: action.errorMsg});
			break;
		default:
			return state;
	}
}

function moveCard(state = {}, action) {
	switch (action.type) {
		case MOVE_CARDS_RIGHT:
			return Object.assign({}, state, {nClass: action.nClass});
			break;
		default:
			return state;
	}
}

function filterCard(state = {classFilter: ''}, action) {
	switch (action.type) {
		case FILTER_CARDS_BY_CLASS:
			return Object.assign({}, state, {classFilter: action.classFilter})
		default:
			return state;
	}
}

const rootReducer = combineReducers( { cardList, moveCard, filterCard });
export default rootReducer;
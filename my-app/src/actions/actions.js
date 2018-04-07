// send request to server to request cards
export const FETCH_CARDS_REQUEST = 'FETCH_CARDS_REQUEST';
export const FETCH_CARDS_SUCCESS = 'FETCH_CARDS_SUCCESS';
export const FETCH_CARDS_ERROR = 'FETCH_CARDS_ERROR';

function fetchCardsRequest() {
	return {type: FETCH_CARDS_REQUEST};
}

function fetchCardsError(err) {
	return {type: FETCH_CARDS_ERROR, errorMsg: err};
}

function fetchCardsSuccess(cardList) {
	 return {type: FETCH_CARDS_SUCCESS, listOfCards: cardList};
}

// create a function to build string to append to url 
// every time a filter fires, fire the buildstring function
// add build string to end of url in getCards() and this will trigger getCards

function buildString(filter) {
	return 'pageNum=1&pageSize=48';
}

export function getCards() {
	return function (dispatch, getState) {
		// dispatch fetchCards to reducer
		dispatch(fetchCardsRequest())
		// state.filter returns object with the filters and their associated values
		const endpoint = `https://hearth-server.herokuapp.com/cards?${buildString(getState().filter)}`;
		// start fetch from cards endpoint
		fetch(endpoint).then(
			// if successful
			(r) => { window.gtag('event', 'cardSearch', {
									'event_category': 'getCards',
  									'event_label': 'cardRequest',
  									'value': endpoint}); return r.json(); }
			// if fails
			,(err) => {dispatch(fetchCardsError(err)); }
			
		// if successful, get state
		).then((json) => { dispatch(fetchCardsSuccess(json)); });
	}
}

export const MOVE_CARDS_RIGHT = 'MOVE_CARDS_RIGHT';

export function moveCardsRight(shouldMove) {
	return {type: MOVE_CARDS_RIGHT, nClass: shouldMove};
};
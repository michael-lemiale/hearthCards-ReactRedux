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

export function getCards() {
	return function (dispatch, getState) {
		// dispatch fetchCards to reducer
		dispatch(fetchCardsRequest())
		const endpoint = "https://hearth-server.herokuapp.com/cards?pageNum=1&pageSize=48"
		// start fetch from cards endpoint
		fetch(endpoint).then(
			// if successful
			(r) => { window.gtag('event', 'cardSearch'); return r.json(); }
			
			// if fails
			,(err) => {dispatch(fetchCardsError(err)); }
			
		// if successful, get state
		).then((json) => { dispatch(fetchCardsSuccess(json)); });
	}
}
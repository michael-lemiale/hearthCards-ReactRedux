import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import reducer from './reducers/reducers.js';
import { getCards } from './actions/actions.js';
import './styles/index.css';

const store = createStore(reducer, applyMiddleware(thunkMiddleware));

store.dispatch(getCards());

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();


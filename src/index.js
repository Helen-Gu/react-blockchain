import React from 'react';
import ReactDOM from 'react-dom';

// Used to make Redux store available to the connect() calls in the component hierarchy below
import { Provider } from 'react-redux';

// Redux is a predictable state container for javascript apps
import { createStore, applyMiddleware } from 'redux';

// A middleware that allows us to write action creators that return a function instead of an action
import reduxThunk from 'redux-thunk';

import './App.css';

import reducers from './reducers'; // Import all reducers
import App from './components/App'; // Root component

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

// Redux store
export const store = createStoreWithMiddleware(reducers);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
); // Render in index.html

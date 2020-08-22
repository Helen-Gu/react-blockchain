// this helper function turns an object whose values are different reducing functions into a single reducing function that can be passed to createStore.
import { combineReducers } from 'redux';

import cryptoFiltersReducer from './crypto_filters_reducer';
import handleErrorReducer from './handle_error_reducer';
import cryptoQuoteReducer from './crypto_quote_reducer';

const rootReducer = combineReducers({
	cryptoFilters: cryptoFiltersReducer,
	handleError: handleErrorReducer,
	cryptoQuote: cryptoQuoteReducer,
});

export default rootReducer;

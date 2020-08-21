// this helper function turns an object whose values are different reducing functions into a single reducing function that can be passed to createStore.
import { combineReducers } from 'redux';

const rootReducer = combineReducers({});

export default rootReducer;
import { GET_CRYPTO_QUOTE } from '../actions/types';

const INITIAL_STATE = {
	cryptoQuotes: [],
};
export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case GET_CRYPTO_QUOTE:
			if (action.payload !== undefined) {
				return {
					...state,
					cryptoQuotes: action.payload,
				};
			}
			return state;
		default:
			return state;
	}
};

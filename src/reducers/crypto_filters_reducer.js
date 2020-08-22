import { SET_CRYPTO_FILTERS, GET_CRYPTOS } from '../actions/types';

const INITIAL_STATE = {
	selectedCryptos: [],
	selectCryptosOptions: [],
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case SET_CRYPTO_FILTERS:
			if (action.payload !== undefined) {
				return {
					...state,
					...action.payload,
				};
			}
			return state;
		case GET_CRYPTOS:
			if (action.payload !== undefined) {
				const selectCryptosOptions = action.payload.map((x) => {
					const { id, name, symbol, slug, is_active } = x;
					return {
						label: name,
						value: symbol,
						id,
						slug,
						is_active,
					};
				});
				const selectedCryptos = selectCryptosOptions.slice(0, 5);
				return {
					...state,
					selectCryptosOptions,
					selectedCryptos,
				};
			}
			return state;
		default:
			return state;
	}
};

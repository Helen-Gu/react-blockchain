import { GET_CRYPTO_QUOTE } from '../actions/types';

const INITIAL_STATE = {
	cryptoQuotes: [],
};
export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case GET_CRYPTO_QUOTE:
			if (action.payload !== undefined) {
				let { data } = action.payload;
				data = data.map((x) => {
					const {
						id,
						symbol,
						name,
						cmc_rank,
						quote: {
							USD: { price },
						},
					} = x;
					return { id, symbol, name, cmc_rank, price };
				});
				return {
					...state,
					cryptoQuotes: data,
				};
			}
			return state;
		default:
			return state;
	}
};

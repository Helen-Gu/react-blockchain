import { GET_CRYPTO_QUOTE } from './types';
import { handleError } from './handle_error';

export const getCryptoQuote = (symbols) => (dispatch) => {
	fetch(
		'https://www.stackadapt.com/coinmarketcap/quotes?' +
			new URLSearchParams({ id: symbols.join(',') })
	)
		.then((res) => res.json())
		.then((res) => {
			const { status, data } = res;

			if (status.error_code !== 0) {
				dispatch(handleError(status.error_code));
			} else {
				const payload = {
					data: Object.keys(data).map((key) => data[key]),
				};
				dispatch({
					type: GET_CRYPTO_QUOTE,
					payload,
				});
			}
		})
		.catch((error) => {
			dispatch(
				handleError(`Error occured while getting cryptos' quotes. ${error}`)
			);
			return new Promise((resolve) => resolve());
		});
};

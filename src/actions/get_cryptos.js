import { GET_CRYPTOS } from './types';
import { handleError } from './handle_error';

export const getCryptos = () => (dispatch) => {
	fetch(
		'https://www.stackadapt.com/coinmarketcap/map?' +
			new URLSearchParams({
				limit: 10,
			}) // fetch only 10 cryptos
	)
		.then((res) => res.json())
		.then((res) => {
			const { status, data } = res;
			if (status.error_code !== 0) {
				dispatch(handleError(status.error_code));
			} else {
				dispatch({
					type: GET_CRYPTOS,
					payload: data,
				});
			}
		})
		.catch((error) => {
			dispatch(
				handleError(`Error occured while getting cryptos collection. ${error}`)
			);
			return new Promise((resolve) => resolve());
		});
};

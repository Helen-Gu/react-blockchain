import { SET_CRYPTO_FILTERS } from './types';

export function setCryptoFilters(property, value) {
	return {
		type: SET_CRYPTO_FILTERS,
		payload: { [property]: value },
	};
}

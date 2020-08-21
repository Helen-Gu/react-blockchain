import { SET_MANAGE_CRYPTO_FILTERS } from './types';

export function setManageCryptoFilters(property, value) {
	return {
		type: SET_MANAGE_CRYPTO_FILTERS,
		payload: { [property]: value },
	};
}

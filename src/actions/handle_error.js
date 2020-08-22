import { HANDLE_ERROR } from './types';

export const handleError = (error = '') => (dispatch) => {
	dispatch({
		type: HANDLE_ERROR,
		payload: error,
	});
};

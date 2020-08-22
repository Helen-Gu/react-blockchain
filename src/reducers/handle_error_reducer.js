import { HANDLE_ERROR } from '../actions/types';

export default (state = '', action) => {
	switch (action.type) {
		case HANDLE_ERROR:
			return { ...state, fetchError: action.payload };
		default:
			return state;
	}
};

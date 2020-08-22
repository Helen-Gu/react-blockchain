import { HANDLE_ERROR } from '../actions/types';

export default (state = '', action) => {
	switch (action.type) {
		case HANDLE_ERROR:
			return { ...state, error: action.payload };
		default:
			return state;
	}
};

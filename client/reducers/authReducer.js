import { actionTypes } from 'actions/authActions';

const { AUTHENTICATED, UNAUTHENTICATED } = actionTypes;

export default function (state = {}, action) {
	switch (action.type) {
	case AUTHENTICATED:
		return { ...state, authenticated: true };
	case UNAUTHENTICATED:
		return { ...state, authenticated: false };
	default:
		return state;
	}
}

import { combineReducers } from 'redux';
import { actionTypes } from 'actions/videoActions';

const { EDIT_VIDEO } = actionTypes;


export default function editing(state = {}, action) {
	const { type, payload } = action;
	switch (action.type) {
	case EDIT_VIDEO:
		return { ...state, [payload.collection]: { id: payload.id } };
	default:
		return state;
	}
}

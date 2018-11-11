import { actionTypes } from "actions/videoActions";
const { REQUEST_VIDEO, RECEIVE_VIDEO, RECEIVE_VIDEO_LIST } = actionTypes

export function videos(state = {}, action){
	const { payload, type } = action;
	switch (type) {
		case REQUEST_VIDEO:
		case RECEIVE_VIDEO:
			return {...state, [payload.id]: video(state[payload.id], action) }
		case RECEIVE_VIDEO_LIST:
			let items = {}
			for (let item of payload.items)
				items = { ...items, [item.id]: {...state, isFetching: false, lastUpdated: Date.now(), ...item } }
			return { ...state, ...items }
		default:
			return state
	}
}

function video(state = {isFetching: false}, action){
	const { payload, type } = action;
	switch (type) {
		case REQUEST_VIDEO:
			return {...state, isFetching: true}
		case RECEIVE_VIDEO:
			return {...state, isFetching: false, lastUpdated: Date.now(), ...payload.item }
		default:
			return state
	}
}

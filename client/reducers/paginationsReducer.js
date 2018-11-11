import { combineReducers } from 'redux';
import { actionTypes } from 'actions/videoActions';
const { REQUEST_VIDEO_LIST, RECEIVE_VIDEO_LIST } = actionTypes

export const paginations = combineReducers({
	videoList: videoList
})
export default paginations;

function videoList(){
	return combineReducers({
		pages: videoListPages,
		currentPage: videoListCurrentPage,
		totalPages: videoListTotalPages
	})
}
function videoListPages(state = {}, action){
	switch (action.type) {
		case REQUEST_VIDEO_LIST:
			return {
				...state,
				[action.payload.page]: {
					ids: [],
					isFetching: true
				}
			}
		case RECEIVE_VIDEO_LIST:
			return {
				...state,
				[action.payload.page]: {
					ids: action.payload.items.map(item => item.id),
					isFetching: false
				}
			}
		default:
			return state
	}
}
function videoListCurrentPage(currentPage = 1, action){
	return action.type == REQUEST_VIDEO_LIST ? action.payload.page : currentPage
}
function videoListTotalPages(totalPages = 0, action = {}){
	return action.type == RECEIVE_VIDEO_LIST ? action.payload.totalPages : totalPages
}

const domain = process.env.DOMAIN;
export const actionTypes = {
	REQUEST_VIDEO_LIST: 'REQUEST_VIDEO_LIST',
	RECEIVE_VIDEO_LIST: 'RECEIVE_VIDEO_LIST',
	REQUEST_VIDEO: 'REQUEST_VIDEO',
	RECEIVE_VIDEO: 'RECEIVE_VIDEO',
}

/*============================== video =================================*/


/*============================== video list =================================*/

export function fetchVideoListIfNeeded(page, limit=100){
	return (dispatch, getState) => {
		if (shouldFetchVideoList(getState(), page))
			return dispatch(fetchVideoList(page, limit))
		else
			return Promise.resolve()
	}
}

function requestVideoList(page){
	return {
		type: actionTypes.REQUEST_VIDEO_LIST,
		payload: {
			page
		}
	}
}

function receiveVideoList(page, totalPages, items){
	return {
		type: actionTypes.RECEIVE_VIDEO_LIST,
		payload: {
			page,
			totalPages,
			items
		}
	}
}

function shouldFetchVideoList(state, page){
	const _page = state.paginations.videoList[page]
	if (!_page){
		return true
	}else if(_page.isFetching){
		return false
	}else{
		return true
	}
}

function fetchVideoList(page, limit){
	const token = localStorage.getItem('token');
	return (dispatch, getState) => {
		dispatch( requestVideoList(page) )
		return fetch(`${domain}/api/videos?page=${page}&limit=${limit}`, {headers: {authorization: `bearer ${token}`} })
			.then(response => response.json())
			.then(response => dispatch(receiveVideoList(response.data.page, response.data.totalPages, response.data.items)))
	}
}

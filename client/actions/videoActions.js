const domain = process.env.DOMAIN;
import { addNotification } from 'actions/notificationActions';
export const actionTypes = {
	REQUEST_VIDEO_LIST: 'REQUEST_VIDEO_LIST',
	RECEIVE_VIDEO_LIST: 'RECEIVE_VIDEO_LIST',
	REQUEST_VIDEO: 'REQUEST_VIDEO',
	RECEIVE_VIDEO: 'RECEIVE_VIDEO',
	REMOVE_VIDEO: "RECEIVE_VIDEO",
	EDIT_VIDEO: "EDIT_VIDEO"
}

/*============================== video =================================*/

export function fetchVideoIfNeeded(id){
	return (dispatch, getState) => {
		if (shouldFetchVideo(getState(), id))
			return dispatch(fetchVideo(id))
		else
			return Promise.resolve()
	}
}

export function editVideo(id){
  return {
    type: EDIT_ARTICLE,
		payload:{
    	collection: 'videos',
    	id
		}
  }
}

function requestVideo(id){
	return {
		type: actionTypes.REQUEST_VIDEO,
		payload: {
			id
		}
	}
}
function receiveVideo(id, item){
	return {
		type: actionTypes.RECEIVE_VIDEO,
		payload: {
			id,
			item
		}
	}
}
function removeVideo(id){
	return {
		type: actionTypes.REMOVE_VIDEO,
		payload: {
			id
		}
	}
}
function shouldFetchVideo(state, id){
	const item = state.entities.videos[id];
	if (!item)
		return true
	else if(item.isFetching)
		return false
	else
		return true
}
function fetchVideo(id){
	const token = localStorage.getItem('token');
	return (dispatch, getState) => {
		dispatch( requestVideo(id) )
		return fetch(`${domain}/api/videos/${id}`, {headers: {authorization: `bearer ${token}`}})
			.then(response => response.json())
			.then(response => dispatch(receiveVideo(response.data.item.id, response.data.item)))
	}
}
export function addVideo(){
	const token = localStorage.getItem('token');
  return (dispatch, getState) => {
    return fetch(`${domain}/api/videos/add`, {headers: {authorization: `bearer ${token}`}})
      .then(response => response.json())
      .then(response => {
				if(response.status!='success')
					throw response;
				Promise.all([
					dispatch(receiveVideo(response.data.item.id, response.data.item)),
					dispatch(addNotification({message: response.message}))
				])
			})
			.catch( response => dispatch(addNotification({message: response.message})))
  }
}

export function deleteVideo(id){
	const token = localStorage.getItem('token');
  return (dispatch, getState) => {
    return fetch(`${domain}/api/videos/${id}`,
						{ method: 'DELETE',
							headers: {authorization: `bearer ${token}`}
						})
			.then(response => response.json())
      .then(response => {
				if(response.status!='success')
					throw response;
				Promise.all([
					dispatch(removeVideo(id)),
					dispatch(addNotification({message: response.message}))
				])
			})
			.catch( response => dispatch(addNotification({message: response.message})))
  }
}

export function updateVideo(id, data){
	const token = localStorage.getItem('token');
  return (dispatch, getState) => {
    return fetch(`${domain}/api/videos/${id}`,
	           { method: 'PUT',
	             headers: {
	               accept: 'application/json, text/plain, */*',
								 authorization: `bearer ${token}`,
	               'Content-Type': 'application/json'
	             },
	             body: JSON.stringify(data)
						 })
      .then(response => response.json())
			.then(response => {
				if(response.status!='success')
					throw response;
				Promise.all([
					dispatch(receiveVideo(response.data.item.id, response.data.item)),
					dispatch(addNotification({message: response.message}))
				])
			})
			.catch( response => dispatch(addNotification({message: response.message})))
  }
}

/*============================== video list =================================*/

export function fetchVideoListIfNeeded(page, limit){
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

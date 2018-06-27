
export const REQUEST_VIDEO_LIST = 'REQUEST_VIDEO_LIST'
export const RECEIVE_VIDEO_LIST = 'RECEIVE_VIDEO_LIST'
export const REQUEST_VIDEO = 'REQUEST_VIDEO'
export const RECEIVE_VIDEO = 'RECEIVE_VIDEO'
export const EDIT_VIDEO = 'EDIT_VIDEO'
export const UPDATE_VIDEO = 'UPDATE_VIDEO'


export function fetchVideo(id){
	return (dispatch, getState) => {
    dispatch(requestVideo(id))
    return new Promise((resolve, reject) => {
			const dummnyResponse = {
				width: 848,
				height: 480,
				url: "http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
			}
			resolve(dummnyResponse)
		}).then(response => dispatch(receiveVideo(id, response)))
  }
}
const requestVideo = (id) => {
  return {
    type: REQUEST_VIDEO,
		list: 'videoList',
		id
  }
}
const receive2DVideo = (id, data) => {
    return {
      type: RECEIVE_2D_VIDEO,
      receivedAt: Date.now(),
      list: 'videoList',
      data: Object.assign({}, data),
      id
    }
}




/*
export function editAndFetch2DVideoIfNeeded(id) {
  return (dispatch, getState) => {
    if (shouldFetch2DVideo(getState(), id))
      return dispatch(fetch2DVideo(id))
							.then(dispatch(edit2DVideo(id)))
    else
      return dispatch(edit2DVideo(id))
  }
}
const shouldFetch2DVideo = (state, id) => {
  const video = state.lists.twoDimensionalVideoList[id]
  if (!video)
    return true
  else if(video.isFetching)
    return false
  else
    return true
}
const request2DVideo = (id) => {
  return {
    type: REQUEST_2D_VIDEO,
		list: 'twoDimensionalVideoList',
		id
  }
}
const receive2DVideo = (id, data) => {
    return {
      type: RECEIVE_2D_VIDEO,
      receivedAt: Date.now(),
      list: 'twoDimensionalVideoList',
      data: Object.assign({}, data),
      id
    }
}
const edit2DVideo = (id) => {
  return {
    type: EDIT_2D_VIDEO,
    collection: 'twoDimensionalVideo',
		params: { id: id }
  }
}*/

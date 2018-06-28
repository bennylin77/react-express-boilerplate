const port = process.env.PORT
const domain = process.env.DOMAIN
const host = process.env.NODE_ENV == 'production'? `${domain}` : `${domain}:${port}`
export const REQUEST_VIDEO_LIST = 'REQUEST_VIDEO_LIST'
export const RECEIVE_VIDEO_LIST = 'RECEIVE_VIDEO_LIST'



export function fetchVideoList(){
  return (dispatch, getState) => {
    dispatch( requestVideoList() )
    return fetch(`${host}/api/video/all`)
      .then(response => response.json())
      .then(result => dispatch(receiveVideoList(result)))
      //.then( () => {
      //  getState().articlesByArticle[tag].items.forEach(function(id) {
      //    if (shouldFetchArticle(getState(), id))
      //      dispatch(fetchArticle(id))
      //  });
      //})
  }
}
function requestVideoList() {
  return {
    type: REQUEST_VIDEO_LIST,
    tag: 'videoList'
  }
}
function receiveVideoList(result) {
    return {
      type: RECEIVE_VIDEO_LIST,
      tag: 'videoList',
      items: result.map( video => video.id ),
      receivedAt: Date.now()
    }
}


/*
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
*/



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

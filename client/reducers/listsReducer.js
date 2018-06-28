
import {
  REQUEST_VIDEO_LIST,
  RECEIVE_VIDEO_LIST,
} from 'actions/videoActions.js'
import { video } from './videoReducer.js';
const REMOVE = 'REMOVE'

const videoList = ( state = {isFetching: false, items: []}, action) => {

  switch (action.type) {
    case REQUEST_VIDEO_LIST:
      return { ...state,
               isFetching: true}
    case RECEIVE_VIDEO_LIST:
      return { ...state,
               isFetching: false,
               items: action.items,
               lastUpdated: action.receivedAt
             }
    default:
      return state
  }
}

const lists = (state = { videoList: {}, hitList: {} }, action) => {
	switch (action.type) {
    case REQUEST_VIDEO_LIST:
    case RECEIVE_VIDEO_LIST:
			return {...state, [action.tag]: videoList(state[action.tag], action) }
    default:
      return state
  }
}
export default lists;

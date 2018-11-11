import { combineReducers } from 'redux';
import { videos } from './videosReducer.js'

export const entities = combineReducers({
	  videos: videos
})

export default entities;

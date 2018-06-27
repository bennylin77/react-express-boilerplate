
import {
  REQUEST_VIDEO,
  RECEIVE_VIDEO,
} from 'actions/videoActions.js'
import { video } from './videoReducer.js';
const REMOVE = 'REMOVE'


const lists = (state = { videoList: {}, hitList: {} }, action) => {
  switch (action.type) {
    case REQUEST_VIDEO:
    case RECEIVE_VIDEO:
      return Object.assign({}, state, {
        [action.list]:  Object.assign({},
                        	state[action.list],
                          { [action.id]: video( state[action.list][action.id], action) })
      })
    default:
      return state
  }
}
export default lists;

import {
  REQUEST_VIDEO,
  RECEIVE_VIDEO
} from '../actions/videoActions.js'


export function video( state = {isFetching: false}, action) {
  switch (action.type) {
    case REQUEST_VIDEO:
      return Object.assign({}, state, {
        isFetching: true
      })
    case RECEIVE_VIDEO:
      return Object.assign({}, state, {
        isFetching: false,
        lastUpdated: action.receivedAt
      }, Object.assign({}, action.data))
    default:
      return state
  }
}

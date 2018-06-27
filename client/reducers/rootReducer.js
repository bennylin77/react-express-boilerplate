import { EDIT_VIDEO } from 'actions/videoActions.js'
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import lists from './listsReducer.js';


function editing(state = {}, action) {
  switch (action.type) {
    case EDIT_VIDEO:
      return Object.assign({}, state, {
        [action.collection]: action.params
      })
    default:
      return state
  }
}

const rootReducer = combineReducers({ lists, editing, router: routerReducer });
export default rootReducer;

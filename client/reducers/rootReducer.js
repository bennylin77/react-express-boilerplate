import { EDIT_VIDEO } from 'actions/videoActions.js'
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import lists from './listsReducer.js';


const rootReducer = combineReducers({ lists, router: routerReducer });
export default rootReducer;

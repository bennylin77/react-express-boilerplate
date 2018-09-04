import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';

import lists from './listsReducer';


const rootReducer = combineReducers({ lists, auth: authReducer, form: formReducer, router: routerReducer });
export default rootReducer;

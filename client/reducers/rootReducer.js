import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';
//import entities from './entitiesReducer.js';
import notifications from './notificationsReducer.js';

const rootReducer = combineReducers({ notifications: notifications, auth: authReducer, form: formReducer, router: routerReducer });
export default rootReducer;

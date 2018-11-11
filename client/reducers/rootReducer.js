import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';
import entities from './entitiesReducer';
import paginations from './paginationsReducer'
import notifications from './notificationsReducer';


const rootReducer = combineReducers({ entities: entities, notifications: notifications, auth: authReducer,
																			paginations: paginations,
																      form: formReducer, router: routerReducer });
export default rootReducer;

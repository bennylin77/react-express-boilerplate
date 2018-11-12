import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import auth from './authReducer';
import editing from './editingReducer';
import entities from './entitiesReducer';
import paginations from './paginationsReducer'
import notifications from './notificationsReducer';


const rootReducer = combineReducers({ entities: entities, notifications: notifications, auth: auth,
																			paginations: paginations, editing: editing,
																      form: formReducer, router: routerReducer });
export default rootReducer;

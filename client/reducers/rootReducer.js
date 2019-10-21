import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import auth from './authReducer';
import editing from './editingReducer';
import entities from './entitiesReducer';
import paginations from './paginationsReducer';
import notifications from './notificationsReducer';


const rootReducer = combineReducers({
	entities,
	notifications,
	auth,
	paginations,
	editing,
																      form: formReducer,
	router: routerReducer,
});
export default rootReducer;

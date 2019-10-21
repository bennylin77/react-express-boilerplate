import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { hot } from 'react-hot-loader';
import Layout from 'components/layouts/Layout.js';
import { actionTypes } from 'actions/authActions';
import { store, history } from './store.js';

const { AUTHENTICATED } = actionTypes;

const token = localStorage.getItem('token');
if (token) store.dispatch({ type: AUTHENTICATED });


const App = () => (
	<Provider store={ store }>
		<ConnectedRouter history={ history }>
			<Layout />
		</ConnectedRouter>
	</Provider>
);


export default hot(module)(App);

import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import Home from  'components/home/Home';
import Video from 'components/video/Entry';
import Auth from  'components/auth/Entry';
import NoRequireAuth from 'components/hocs/NoRequireAuth';
import RequireAuth from 'components/hocs/RequireAuth';
import './styles/Main.css';

class Main extends Component {
	render() {
				return (
					<main>
			        <Route exact path='/' component={RequireAuth(Home)}/>
							<Route path='/videos' component={RequireAuth(Video)}/>
							<Route path='/auth' component={NoRequireAuth(Auth)}/>
					</main>);
	}
}
export default Main;

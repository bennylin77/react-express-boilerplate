import React, { Component } from 'react';
import Home from  'components/home/Home.js';
import { Switch, Route } from 'react-router-dom'
import './styles/Main.css';

class Main extends Component {
	render() {
				return (
					<main>
						<Switch>
			        <Route exact path='/' component={Home}/>
			      </Switch>
					</main>);
	}
}
export default Main;

import React, { Component } from 'react';
import Home from  'components/home/Home.js';
import Video from 'components/video/Entry.js';
import { Route } from 'react-router-dom'
import './styles/Main.css';

class Main extends Component {
	render() {
				return (
					<main>

			        <Route exact path='/' component={Home}/>
							<Route path='/video' component={Video}/>
			      
					</main>);
	}
}
export default Main;

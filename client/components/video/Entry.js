import React from 'react';
import All from 'containers/video/AllContainer.js';
import Show from 'components/video/Show.js';
import { Switch, Route } from 'react-router-dom';

function Entry(props) {
	return (
		<Switch>
    	<Route exact path='/videos' component={ All } />
			<Route exact path='/videos/:id' component={ Show } />
		</Switch>
	);
}
export default Entry;

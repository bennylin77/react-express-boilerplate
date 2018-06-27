import React from 'react';
import All from 'containers/videos/All.js';
import { Switch, Route } from 'react-router-dom'

function Entry(props) {
  return (
    <Switch>
      <Route exact path='/videos' component={ALL}/>
    </Switch>
  );
}
export default Entry;

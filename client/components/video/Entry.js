import React from 'react';
import All from 'containers/video/All.js';
import { Route } from 'react-router-dom'

function Entry(props) {
  return (
    <Route exact path='/video/all' component={All}/>
  );
}
export default Entry;

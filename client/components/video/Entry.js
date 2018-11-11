import React from 'react';
import All from 'containers/video/AllContainer.js';
import { Route } from 'react-router-dom'

function Entry(props) {
  return (
    <Route exact path='/videos' component={All}/>
  );
}
export default Entry;

import React, { Component } from 'react';
import List from 'containers/video/ListContainer.js';

class All extends Component{
  constructor(props) {
     super(props);
  }

  render() {
    return (
  		<section>
        <List />
  		</section>
    );
  }
}
export default All;

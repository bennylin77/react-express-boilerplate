import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchVideoList } from 'actions/videoActions.js';
import List from 'components/video/List.js';


class All extends Component{
  constructor(props) {
     super(props);
     this.isNotFetched = this.isNotFetched.bind(this);
   }
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchVideoList())
  }

  isNotFetched(){
    const { videoList } = this.props
    return !videoList || !videoList.items;
  }


  render() {
    const { videoList } = this.props

    if (this.isNotFetched()) {
      return <h4><i>Loading</i></h4>
    }
    return (
  		<section>
        <List videos={videoList.items} />
  		</section>
    );
  }
}

//connect
function mapStateToProps(state) {
  const { lists: { videoList: videoList } } = state
  return {
    videoList
  }
}
const App = connect(mapStateToProps)(All);
export default App;

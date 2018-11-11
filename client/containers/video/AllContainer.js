import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { fetchVideoListIfNeeded } from 'actions/videoActions.js';
import All from 'components/video/All.js';


//connect
const mapStateToProps =  state => {
	const { paginations: {videoList: videoList}, history } = state
  return {
		videoList,
    history
  }
}
const mapDispatchToProps = dispatch => ({
  fetchVideoListIfNeeded: () => dispatch(fetchVideoListIfNeeded()),

})
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(All));

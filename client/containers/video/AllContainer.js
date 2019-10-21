import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchVideoListIfNeeded, addVideo, deleteVideo } from 'actions/videoActions.js';
import All from 'components/video/All.jsx';


// connect
const mapStateToProps = (state) => {
	const { entities: { videos }, paginations: { videoList } } = state;
	return {
		videos,
		videoList,
	};
};
const mapDispatchToProps = (dispatch) => ({
	fetchVideoListIfNeeded: (page, limit) => dispatch(fetchVideoListIfNeeded(page, limit)),
	addVideo: () => dispatch(addVideo()),
	deleteVideo: (id) => dispatch(deleteVideo(id)),
});
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(All));

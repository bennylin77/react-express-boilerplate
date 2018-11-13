import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editVideo, updateVideo, fetchVideoIfNeeded } from 'actions/videoActions';
import Form from 'components/video/Form';
import { reduxForm } from 'redux-form';
import { withRouter } from 'react-router-dom'

//connect

const mapStateToProps = (state) => {
	const {entities: {videos}, editing } = state;
	let title, url;
	if(editing && editing.videos && editing.videos.id){
		const id = editing.videos.id
		title = videos[id].title
		url = videos[id].url
	}
	const initialValues = {
		title: title || "",
		url: url || "",
	}

  return { initialValues: initialValues };
}
const mapDispatchToProps = dispatch => ({
	fetchVideoIfNeeded: id => dispatch(fetchVideoIfNeeded(id)),
  updateVideo: (id, data) => dispatch(updateVideo(id, data)),
	editVideo: id => dispatch(editVideo(id))
})

let videoForm = reduxForm({
  form: 'videoFrom',
  enableReinitialize: true,
  keepDirtyOnReinitialize: true
})(Form)

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(videoForm))

//export default videoForm

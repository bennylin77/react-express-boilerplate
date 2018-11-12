import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editVideo, updateVideo, fetchVideoIfNeeded } from 'actions/videoActions';
import Form from 'components/video/Form';
import { reduxForm } from 'redux-form';

//connect

const mapStateToProps = (state) => {
	const {entities: {videos}, editing: {videos: {id}} } = state;
	const initialValues = {
		title: videos[id].title,
		url: videos[id].url,
	}
  return { initialValues: initialValues };
}
const mapDispatchToProps = dispatch => ({
	fetchVideoIfNeeded: id => dispatch(fetchVideoIfNeeded(id)),
  updateVideo: data => dispatch(updateVideo(data)),
	editVideo: id => dispatch(editVideo(id))
})
/*
let videoForm = connect(
    mapStateToProps,
    mapDispatchToProps
)(Form);

export default reduxForm({
  form: 'videoFrom'
})(videoForm);
*/

let videoForm = reduxForm({
  form: 'videoFrom'
})(videoForm)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(videoForm)

//export default videoForm

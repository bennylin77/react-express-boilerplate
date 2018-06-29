import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchVideoList } from 'actions/videoActions.js';
import List from 'components/video/List.js';

//connect
const mapStateToProps =  state => {
  const { lists: { videoList: videoList } } = state
  return {
    videoList
  }
}
const mapDispatchToProps = dispatch => ({
  fetchVideoList: () => dispatch(fetchVideoList())
})
export default connect(mapStateToProps, mapDispatchToProps)(List);

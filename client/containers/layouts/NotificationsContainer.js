import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeNotification } from 'actions/notificationActions';
import Notifications from 'components/layouts/Notifications';

//connect
const mapStateToProps = state => {
  const { notifications } = state
  return {
		notifications
  }
}
const mapDispatchToProps = dispatch => ({
  removeNotification: id => dispatch(removeNotification(id))
})
export default connect(mapStateToProps, mapDispatchToProps)(Notifications);

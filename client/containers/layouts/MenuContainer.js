import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { signOut } from 'actions/authActions';
import Menu from 'components/layouts/Menu';
//connect
const mapStateToProps =  state => {
  const { auth } = state
  return {
		auth
  }
}
const mapDispatchToProps = dispatch => ({
  signOut: () => dispatch(signOut()),
})
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Menu));

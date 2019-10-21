import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn } from 'actions/authActions';
import Form from 'components/auth/SignInForm';
import { reduxForm } from 'redux-form';
import { withRouter } from 'react-router-dom';

// connect
const mapStateToProps = (state) => ({ });
const mapDispatchToProps = (dispatch) => ({
	signIn: (data, history) => dispatch(signIn(data, history)),
});

const SignInForm = connect(
	mapStateToProps,
	mapDispatchToProps,
)(Form);

export default withRouter(reduxForm({
	form: 'signin',
})(SignInForm));

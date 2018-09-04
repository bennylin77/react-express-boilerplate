import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn } from 'actions/authActions';
import Form from 'components/auth/SignInForm';
import { reduxForm } from 'redux-form';

//connect
const mapStateToProps = (state) => {
  return { errorMessage: state.auth.error };
}
const mapDispatchToProps = dispatch => ({
  signIn: (data, history) => dispatch(signIn(data, history)),
})

const SignInForm = connect(
    mapStateToProps,
    mapDispatchToProps
)(Form);

export default reduxForm({
  form: 'signin'
})(SignInForm);

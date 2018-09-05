import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signUp } from 'actions/authActions';
import Form from 'components/auth/SignUpForm';
import { reduxForm } from 'redux-form';

//connect
const mapStateToProps = (state) => {
  return { errorMessage: state.auth.error };
}
const mapDispatchToProps = dispatch => ({
  signUp: (data, history) => dispatch(signUp(data, history)),
})

const SignUpForm = connect(
    mapStateToProps,
    mapDispatchToProps
)(Form);

export default reduxForm({
  form: 'signup'
})(SignUpForm);

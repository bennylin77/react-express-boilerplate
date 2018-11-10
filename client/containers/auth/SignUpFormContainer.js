import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signUp } from 'actions/authActions';
import Form from 'components/auth/SignUpForm';
import { reduxForm } from 'redux-form';
import { withRouter } from 'react-router-dom'

//connect
const mapStateToProps = (state) => {
  return { };
}
const mapDispatchToProps = dispatch => ({
  signUp: (data, history) => dispatch(signUp(data, history)),
})

const SignUpForm = connect(
    mapStateToProps,
    mapDispatchToProps
)(Form);

export default withRouter(reduxForm({
  form: 'signup'
})(SignUpForm));

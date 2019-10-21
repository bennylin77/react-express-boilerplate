import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import SignInForm from 'containers/auth/SignInFormContainer';

class SignIn extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className='d-flex justify-content-center pt-5'>
				<SignInForm />
			</div>
		);
	}
}
export default SignIn;

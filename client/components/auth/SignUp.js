import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import SignUpForm from 'containers/auth/SignUpFormContainer';


class SignUp extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className='d-flex justify-content-center pt-5'>
				<SignUpForm />
			</div>
		);
	}
}
export default SignUp;

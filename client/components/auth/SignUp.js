import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import SignUpForm from 'containers/auth/SignUpFormContainer';


class SignIn extends Component {
	constructor(props){
		super(props)
	}
	render() {
		return (
			<div>
				<SignUpForm />
			</div>
		);
	}
}
export default SignIn;

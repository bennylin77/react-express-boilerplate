import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import "./styles/Auth.css";
import SignInForm from 'containers/auth/SignInFormContainer';


class SignIn extends Component {
	constructor(props){
		super(props)
	}
	render() {
		return (
			<div>
				<SignInForm />
			</div>
		);
	}
}
export default SignIn;

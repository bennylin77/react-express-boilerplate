import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/Auth.css';
import { Link } from 'react-router-dom';
import { Field } from 'redux-form';
import { FaFacebookF, FaEnvelope, FaLock } from 'react-icons/fa';
import {
	Card, CardBody, CardTitle, Form, FormGroup, Button,
				 Input, InputGroup, InputGroupAddon, InputGroupText,
} from 'reactstrap';

class SignInForm extends Component {
	constructor(props) {
		super(props);
	}

	submit = (values) => {
		this.props.signIn(values, this.props.history);
	}

	render() {
		const { handleSubmit } = this.props;
		return (
			<Card className='auth-card'>
				<CardBody className='auth-card-body'>
					<h2 className='my-3 text-center'>Sign In</h2>
					<p>
						<a href='' className='btn btn-block btn-facebook btn-social d-flex align-items-center justify-content-center'>
							{' '}
							<FaFacebookF style={ { paddingRight: 5 } } />
							{' '}
Sign in via facebook
							{' '}
						</a>
					</p>
					<p className='divider-text'>
				    <span style={ { background: '#ffffff' } }>OR</span>
					</p>
					<Form onSubmit={ handleSubmit(this.submit) }>
						<InputGroup className='form-group'>
							<InputGroupAddon addonType='prepend'>
								<InputGroupText><FaEnvelope /></InputGroupText>
							</InputGroupAddon>
							<Field
								className='form-control'
										 name='email'
	                   component='input'
	                   type='text'
	                   placeholder='Email'
							/>
						</InputGroup>
						<InputGroup className='form-group'>
							<InputGroupAddon addonType='prepend'>
								<InputGroupText><FaLock /></InputGroupText>
							</InputGroupAddon>
							<Field
								className='form-control'
										 name='password'
	                   component='input'
	                   type='password'
	                   placeholder='Password'
							/>
						</InputGroup>
					  <FormGroup>
					    <Button color='primary' block> Sign In </Button>
					  </FormGroup>
					  <p className='text-center'>
Don't have an account?
							<Link to='/auth/signup'>Sign Up</Link>
       </p>
					</Form>
				</CardBody>
			</Card>
		);
	}
}

export default SignInForm;

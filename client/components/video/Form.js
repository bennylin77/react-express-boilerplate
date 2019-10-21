import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Field } from 'redux-form';
import { Form, FormGroup, Button } from 'reactstrap';

class VideoForm extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount = () => {
		const { fetchVideoIfNeeded, editVideo } = this.props;
		const { id } = this.props.match.params;
		fetchVideoIfNeeded(id)
			.then(editVideo(id));
	}


	submit = (values) => {
		const { updateVideo } = this.props;
		const { id } = this.props.match.params;
		updateVideo(id, values);
	}

	render() {
		const { handleSubmit } = this.props;
		return (
			<div>
				<h2 className='my-3 text-center'>Details</h2>
				<Form onSubmit={ handleSubmit(this.submit) }>
					<FormGroup className='form-group'>
						<Field
							className='form-control'
											 name='title'
											 component='input'
											 type='text'
											 placeholder='Title'
						/>
					</FormGroup>
					<FormGroup className='form-group'>
						<Field
							className='form-control'
											 name='url'
											 component='input'
											 type='text'
											 placeholder='URL'
						/>
					</FormGroup>
					<FormGroup>
						<Button color='primary' block> Update </Button>
					</FormGroup>
				</Form>
			</div>
		);
	}
}

export default VideoForm;

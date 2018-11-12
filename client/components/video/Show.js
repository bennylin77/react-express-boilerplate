import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import Form from 'containers/video/FormContainer';


class Show extends Component {
	constructor(props){
		super(props)
	}
	render() {
		return (
			<div className="d-flex justify-content-center pt-5">
				<Form  />
			</div>
		);
	}
}
export default Show;

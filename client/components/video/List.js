import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { ListGroup, ListGroupItem } from 'reactstrap';

class List extends Component {
	constructor(props){
		super(props)
	}
	render() {
		const { videos } = this.props;
		const items = videos.map((v) => <ListGroupItem key={v}>{v}</ListGroupItem>);

		return (
			<ListGroup>{items}</ListGroup>
		);
	}
}
export default List;

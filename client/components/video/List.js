import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { ListGroup, ListGroupItem } from 'reactstrap';

class List extends Component {
	constructor(props){
		super(props)
		this.isNotFetched = this.isNotFetched.bind(this);
	}
	componentDidMount() {
		const { fetchVideoList } = this.props;
		fetchVideoList()
	}
	isNotFetched() {
		const { videoList } = this.props
		return !videoList || !videoList.items;
	}


	render() {
		const { videoList } = this.props
    if (this.isNotFetched()) {
      return <h4><i>Loading</i></h4>
    }
		const items = videoList.items.map((v) => <ListGroupItem key={v}>{v}</ListGroupItem>);
		return (
			<ListGroup>{items}</ListGroup>
		);
	}
}
export default List;

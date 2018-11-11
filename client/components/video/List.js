import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';
import { Button } from 'reactstrap';

class List extends Component {
	constructor(props){
		super(props)
		this.isNotFetched = this.isNotFetched.bind(this);
	}
	isNotFetched = () => {
		const { pages, currentPage, videos } = this.props
		return !pages || !currentPage || !pages[currentPage] || pages[currentPage].isFetching || !videos;
	}


	render() {
		const { url, videos, currentPage, pages } = this.props
    if (this.isNotFetched()) {
      return <h4><i>Loading</i></h4>
    }

		const items = pages[currentPage].ids.map(id =>{
			return (<ListGroupItem key={id}>
								<ListGroupItemHeading>{videos[id].url}</ListGroupItemHeading>
								<div>
									<ButtonGroup>
										<Link to={`/${url}/${id}`} className="btn btn-outline-secondary" role="button">Detail</Link>
						      </ButtonGroup>
								</div>
							</ListGroupItem>)}
		);

		return (
			<ListGroup>{items}</ListGroup>
		);

	}
}
export default List;

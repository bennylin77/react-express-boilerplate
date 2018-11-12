import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

class App extends Component {
	constructor(props){
		super(props)
	}
	isNotFetched = () => {
		const { currentPage, totalPages } = this.props
		return !currentPage || !totalPages;
	}
	render() {
		const { path, currentPage, totalPages } = this.props
    if (this.isNotFetched()) {
      return <h4><i>Loading</i></h4>
    }
		const items = []
		for(let i=1; i<=totalPages; i++){
			items.push(<PaginationItem key={i} style={{display: "inline-block"}}>
										<Link to={`${path}?page=${i}`} className="page-link">{i}</Link>
								 </PaginationItem>)

		}
		return (
			<Pagination>{items}</Pagination>
		);
	}
}
export default App;

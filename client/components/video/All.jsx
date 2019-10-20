import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Container, Row, Col, Button } from 'reactstrap';
import List from './List';
import Pagination from './Pagination';

const LIMIT = 10;

class All extends Component{
	constructor(props) {
     	super(props);
	}
  
	componentDidMount = () => {
		const { fetchVideoListIfNeeded, location: {search: search} } = this.props;
		const params = new URLSearchParams(search);
		const page = params.get('page');
		fetchVideoListIfNeeded(page || 1, LIMIT)
	}
	componentDidUpdate = (prevProps) =>{
		const { fetchVideoListIfNeeded } = this.props;
		const params = new URLSearchParams(this.props.location.search);
		const prevParams = new URLSearchParams(prevProps.location.search);
		// Typical usage (don't forget to compare props):
	  if (params.get('page') !== prevParams.get('page')) {
	    fetchVideoListIfNeeded(params.get('page') || 1, LIMIT);
	  }
	}
	isNotFetched = () => {
		const { videoList, videos } = this.props
		return !videoList || !videos;
	}

	handleAdd = () => {
		const { addVideo } = this.props;
		addVideo().then(
			()=>this.props.history.push('/videos')
		)
	}
	handleDelete = (id) => {
		const { deleteVideo } = this.props;
		deleteVideo(id).then(
			()=>this.props.history.push('/videos')
		)
	}
  render() {
		if (this.isNotFetched()) {
      return <h4><i>Loading</i></h4>
    }
		const {videos, videoList: { pages: pages, currentPage: currentPage, totalPages: totalPages}} = this.props
    return (
			<section>
				<Container className="py-5">
					<Row className="mb-2">
						<Col><Button onClick={this.handleAdd} >Add New Video</Button></Col>
					</Row>
	        <Row className="mb-2">
	          <Col><List path={"/videos"} videos={videos} currentPage={currentPage} pages={pages} onDeleteClick={this.handleDelete} /></Col>
	        </Row>
					<Row className="mb-2">
	          <Col><Pagination path={"/videos"} currentPage={currentPage} totalPages={totalPages}/></Col>
	        </Row>
				</Container>
  		</section>
    );
  }
}
export default All;

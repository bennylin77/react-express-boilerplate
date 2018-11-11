import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Container, Row, Col, Button } from 'reactstrap';
import List from './List';
import Pagination from './Pagination';

class All extends Component{
  constructor(props) {
     super(props);
  }
	componentDidMount = () => {
		const { fetchVideoListIfNeeded, location: {search: search} } = this.props;
		const params = new URLSearchParams(search);
		const page = params.get('page');
		fetchVideoListIfNeeded(page || 1)
	}
	componentDidUpdate = (prevProps) =>{
		const { fetchVideoListIfNeeded } = this.props;
		const params = new URLSearchParams(this.props.location.search);
		const prevParams = new URLSearchParams(prevProps.location.search);
		// Typical usage (don't forget to compare props):
	  if (params.get('page') !== prevParams.get('page')) {
	    fetchVideoListIfNeeded(params.get('page') || 1);
	  }
	}
	isNotFetched = () => {
		const { videoList, videos } = this.props
		return !videoList || !videos;
	}

  render() {
		if (this.isNotFetched()) {
      return <h4><i>Loading</i></h4>
    }
		const {videos, videoList: { pages: pages, currentPage: currentPage, totalPages: totalPages}} = this.props
    return (
			<section>
				<Container className="py-5">
	        <Row>
	          <Col><List url={"/videos"} videos={videos} currentPage={currentPage} pages={pages} /></Col>
	        </Row>
					<Row className="mb-2">
	          <Col><Pagination url={"/videos"} currentPage={currentPage} totalPages={totalPages}/></Col>
	        </Row>
				</Container>
  		</section>
    );
  }
}
export default All;

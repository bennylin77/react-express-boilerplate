import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export default function (ComposedComponent) {
	class NoRequireAuth extends Component {
    componentWillMount = () => {
    	if (this.props.authenticated) {
    		this.props.history.push('/');
    	}
    }

    componentWillUpdate = (nextProps) => {
    	if (nextProps.authenticated) {
    		this.props.history.push('/');
    	}
    }

    PropTypes = {
    	router: PropTypes.object,
    }

    render() {
    	return <ComposedComponent { ...this.props } />;
    }
	}

	const mapStateToProps = (state) => ({ authenticated: state.auth.authenticated });

	return connect(mapStateToProps)(NoRequireAuth);
}

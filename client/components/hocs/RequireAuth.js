import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export default function (ComposedComponent) {
	class RequireAuth extends Component {
    componentWillMount = () => {
    	if (!this.props.authenticated) {
    		this.props.history.push('/auth/signin');
    	}
    }

    componentWillUpdate = (nextProps) => {
    	if (!nextProps.authenticated) {
    		this.props.history.push('/auth/signin');
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

	return connect(mapStateToProps)(RequireAuth);
}

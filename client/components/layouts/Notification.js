import React, { Component } from "react";
import PropTypes from "prop-types";

class Notification extends Component {
	/*
	In our application toast notifications can't be changed once they are created, so we're just going to return false for shouldComponentUpdate to prevent unnecessary rendering when a new toast is added/removed from the collection.
	*/
  shouldComponentUpdate() {
    return false;
  }
	render() {
    return (
      <li className="notification" style={{ backgroundColor: this.props.color }}>
        <p className="notification-content">
          {this.props.message}
        </p>
        <button className="notification-dismiss" onClick={this.props.onDismissClick}>
          x
        </button>
      </li>
    );
  }
}

Notification.propTypes = {
  color: PropTypes.string.isRequired,
  onDismissClick: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired
};

export default Notification;

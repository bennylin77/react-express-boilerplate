import React, { Component } from "react";
import PropTypes from "prop-types";
//import Notification from 'components/layouts/Notification';
import './styles/Notification.css';

class Item extends Component {
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
Item.propTypes = {
  color: PropTypes.string.isRequired,
  onDismissClick: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired
};


class Notifications extends Component {
  render() {
		const { removeNotification, notifications } = this.props;
    return (
			<ul className="notifications">
	      {notifications.map(no => {
	        const { id } = no;
	        return (
	          <Item {...no} key={id} onDismissClick={() => removeNotification(id)} />
	        );
	      })}
	    </ul>
    );
  }
}
Notifications.propTypes = {
  removeNotification: PropTypes.func.isRequired,
  notifications: PropTypes.arrayOf(PropTypes.object).isRequired
};


export default Notifications;

import React, { Component } from "react";
import PropTypes from "prop-types";
//import Notification from 'components/layouts/Notification';
import './styles/Notification.css';
import { Alert } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


class Item extends Component {
	//In our application toast notifications can't be changed once they are created, so we're just going to return false for shouldComponentUpdate to prevent unnecessary rendering when a new toast is added/removed from the collection.
	componentDidMount(){
		const {forever, id, onDismissClick} = this.props
		if(forever)
			return;
		setTimeout(()=>{
			onDismissClick(id)
		}, 9000)
	}

  shouldComponentUpdate() {
    return false;
  }
	render() {
		const {color, id, message, onDismissClick} = this.props
    return (
      <li>
				<Alert color={color} toggle={()=>onDismissClick(id)}>
	        {message}
	      </Alert>
      </li>
    );
  }
}


/*
class Item extends Component {
	//In our application toast notifications can't be changed once they are created, so we're just going to return false for shouldComponentUpdate to prevent unnecessary rendering when a new toast is added/removed from the collection.
	componentDidMount(){
		const {forever, id, onDismissClick} = this.props
		if(forever)
			return;
		setTimeout(()=>{
			onDismissClick(id)
		}, 5000)
	}

  shouldComponentUpdate() {
    return false;
  }
	render() {
		const {color, id, message} = this.props
    return (
      <li className="notification" style={{ backgroundColor: color }}>
        <p className="notification-content">
          {message}
        </p>
        <button className="notification-dismiss" onClick={()=>onDismissClick(id)}>
          x
        </button>
      </li>
    );
  }
}
*/
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
	          <Item {...no} key={id} onDismissClick={removeNotification} />
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

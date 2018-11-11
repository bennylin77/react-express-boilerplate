import { actionTypes } from "actions/notificationActions";
const { ADD_NOTIFICATION, REMOVE_NOTIFICATION } = actionTypes

export default function notifications(state = [], action) {
  const { payload, type } = action;
	switch (type) {
    case ADD_NOTIFICATION:
      return [payload, ...state];
    case REMOVE_NOTIFICATION:
      return state.filter(notification => notification.id !== payload.id);
    default:
      return state;
  }
}

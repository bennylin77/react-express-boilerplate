export const actionTypes = {
	ADD_NOTIFICATION: 'ADD_NOTIFICATION',
	REMOVE_NOTIFICATION: 'REMOVE_NOTIFICATION',
}


let id = 0;
const defaultOptions = {
  color: "#6796e6"
};

function createNotification(options) {
  return {
    ...defaultOptions,
    ...options,
    id: id++
  }
}

export function addNotification(options = {}) {
  return {
		type: actionTypes.ADD_NOTIFICATION,
    payload: createNotification(options)
  };
}

export function removeNotification(id) {
  return {
		type: actionTypes.REMOVE_NOTIFICATION,
    payload: {id}
  };
}

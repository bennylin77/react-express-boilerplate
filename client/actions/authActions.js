import { addNotification } from 'actions/notificationActions';

const domain = process.env.DOMAIN;
export const actionTypes = {
	AUTHENTICATED: 'AUTHENTICATED',
	UNAUTHENTICATED: 'UNAUTHENTICATED',
};

export function signUp({ email, password, confirmPassword }, history) {
	const data = { email, password, confirmPassword };
	return (dispatch, getState) => {
		const redirectPath = '/';
		return fetch(`${domain}/api/auth/signup`,
			{
				method: 'POST',
				headers: {
			                Accept: 'application/json',
			                'Content-Type': 'application/json',
			              },
				body: JSON.stringify(data),
			})
								 .then((response) => response.json())
								 .then((response) => {
									  if (response.status != 'success') throw response;
				localStorage.setItem('token', response.data.token);
	 									localStorage.setItem('id', response.data.user.id);
				dispatch({ type: actionTypes.AUTHENTICATED });
								 })
								 .then(() => {
								 		history.push(redirectPath);
								 })
								 .catch((response) => {
									  dispatch(addNotification({ message: response.message }));
			});
	};
}

export function signIn({ email, password }, history) {
	const data = { email, password };
	return (dispatch, getState) => {
		const redirectPath = '/';
		return fetch(`${domain}/api/auth/signin`,
			{
				method: 'POST',
				headers: {
			                Accept: 'application/json',
			                'Content-Type': 'application/json',
			              },
				body: JSON.stringify(data),
			})
								 .then((response) => response.json())
								 .then((response) => {
									  if (response.status != 'success') throw response;
				localStorage.setItem('token', response.data.token);
	 									localStorage.setItem('id', response.data.user.id);
				dispatch({ type: actionTypes.AUTHENTICATED });
								 })
								 .then(() => {
								 		history.push(redirectPath);
								 })
								 .catch((response) => dispatch(addNotification({ message: response.message })));
	};
}

export function signOut() {
	localStorage.clear();
	return {
		type: actionTypes.UNAUTHENTICATED,
	};
}

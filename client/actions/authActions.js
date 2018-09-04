const domain = process.env.DOMAIN;
export const authTypes = {
	AUTHENTICATED: 'AUTHENTICATED',
	UNAUTHENTICATED: 'UNAUTHENTICATED',
	AUTHENTICATION_ERROR: 'AUTHENTICATION_ERROR'
}

export const signIn = ({ email, password }, history) => {
	const data = {email: email, password: password}
  return (dispatch, getState) => {
		let redirectPath = '/';
		return fetch(`${domain}/api/auth/signin`,
									{ method: 'POST',
										headers: {
			                'Accept': 'application/json',
			                'Content-Type': 'application/json'
			              },
										body: JSON.stringify(data)})
								 .then(response => response.json())
								 .then(response => {
									  if(response.status!='success')
											throw response;
										localStorage.setItem('token', response.data.token);
	 									localStorage.setItem('id', response.data.user.id);
 										redirectPath = `/`
										dispatch({ type: authTypes.AUTHENTICATED })
								 })
								 .then(()=>{
								 		history.push(redirectPath);
								 })
								 .catch(response => dispatch({
										         					type: authTypes.AUTHENTICATION_ERROR,
										         					payload: 'Invalid email or password'
										       					}))
	};
}

export const signOut = () => {
  localStorage.clear();
  return {
    type: authTypes.UNAUTHENTICATED
  };
}

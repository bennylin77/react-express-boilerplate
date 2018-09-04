import React from 'react';
import SignIn from 'components/auth/SignIn';
import SignUp from 'components/auth/SignUp';
import { Route } from 'react-router-dom'

const Entry = (props) => {
  return (
		<div>
    	<Route path="/auth/signin" component={SignIn}/>
			<Route path="/auth/signup" component={SignUp}/>
		</div>
  );
}
export default Entry;

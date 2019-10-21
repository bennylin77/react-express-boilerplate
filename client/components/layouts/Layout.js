
import React from 'react';
import Menu from 'containers/layouts/MenuContainer';
import Main from 'components/layouts/Main';
import Footer from 'components/layouts/Footer';
import Notifications from 'containers/layouts/NotificationsContainer';

const Layout = (props) => (
	<div>
		<Menu />
		<Notifications />
		<Main />
		<Footer />
	</div>
);

export default Layout;

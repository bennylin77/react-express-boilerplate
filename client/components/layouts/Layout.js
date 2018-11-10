
import React from 'react';
import Menu from 'containers/layouts/MenuContainer';
import Main from 'components/layouts/Main';
import Footer from 'components/layouts/Footer';
import Notifications from 'containers/layouts/NotificationsContainer';

const Layout = props => {
  return (
    <div>
      <Menu/>
      <Main/>
      <Footer/>
			<Notifications />
    </div>
  );
}

export default Layout;


import React from 'react';
import Menu from 'containers/layouts/MenuContainer';
import Main from 'components/layouts/Main';
import Footer from 'components/layouts/Footer';

const Layout = props => {
  return (
    <div>
      <Menu/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default Layout;

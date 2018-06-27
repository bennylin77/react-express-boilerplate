
import React from 'react';
import Menu from 'components/layouts/Menu.js';
import Main from 'components/layouts/Main.js';
import Footer from 'components/layouts/Footer.js';

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

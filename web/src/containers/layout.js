import React from "react";
import Nav from '../components/nav'

import '../styles/general.scss'

const Layout = (props) => {

  const { children } = props


  return (
    <>
      {children}
    </>
  );
};

export default Layout;

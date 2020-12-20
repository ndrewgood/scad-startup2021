import React from "react";

import '../styles/general.scss'
import '../styles/typography.scss'

const Layout = (props) => {

  const { children } = props


  return (
    <>
      {children}
    </>
  );
};

export default Layout;

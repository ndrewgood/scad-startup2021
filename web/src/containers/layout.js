import React from "react";

import SEO from '../components/seo'

import '../styles/general.scss'
import '../styles/typography.scss'

const Layout = (props) => {

  const { children } = props


  return (
    <>
      <SEO />
      {children}
    </>
  );
};

export default Layout;

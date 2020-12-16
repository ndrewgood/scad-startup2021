import React from "react";
import Headroom from 'react-headroom';

import Layout from '../containers/layout'
import Nav from '../components/nav'
import NavMobile from '../components/nav-mobile'



const Page = (props) => {

  const { children } = props

  return (
    <Layout>
      <Headroom disableInlineStyles={true}>
        <Nav />
      </Headroom>
      {children}
    </Layout>
  );
};

export default Page;

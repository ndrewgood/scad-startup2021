import React from "react";
import Headroom from 'react-headroom';

import Layout from '../containers/layout'
import Nav from '../components/nav'
import HeroHome from '../components/hero-home'
import NavMobile from '../components/nav-mobile'
import Footer from '../components/footer'



const Page = (props) => {

  const { children } = props

  return (
    <Layout>
      <Headroom disableInlineStyles={true}>
        <Nav />
      </Headroom>
      <HeroHome />
      {children}
      <Footer/>
    </Layout>
  );
};

export default Page;

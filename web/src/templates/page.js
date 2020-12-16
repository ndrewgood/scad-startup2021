import React from "react";
import Layout from '../containers/layout'
import Nav from '../components/nav'
import NavMobile from '../components/nav-mobile'


const Page = (props) => {

  const { children } = props


  return (
    <Layout>
      <Nav />
      {children}
    </Layout>
  );
};

export default Page;

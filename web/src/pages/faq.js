import React from "react";
import Page from "../templates/page";

import Hero from '../components/hero';


const Faq = (props) => {

  return (
    <Page>
      <Hero 
        smallHeader={"Frequently Asked Questions"} 
        bigHeader={["Have Any", <br key="ugh"/>,  "Questions?"]}
      />
      <h1>Faq Page</h1>
    </Page>
  );
};

export default Faq;

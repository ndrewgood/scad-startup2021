import React from "react";
import Page from "../templates/page";

import Hero from '../components/hero'


const ExpertsPage = (props) => {

  return (
    <Page>
      <Hero 
        smallHeader={"Shout out to our"} 
        bigHeader={["Pretty Solid", <br key="ugh"/>, "Experts"]}
      />
      <p>Experts</p>
    </Page>
  );
};

export default ExpertsPage;

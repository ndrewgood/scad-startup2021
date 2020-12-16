import React from "react";
import Page from "../templates/page";

import Hero from '../components/hero'

const Deliverables = (props) => {

  return (
    <Page>
      <Hero 
        smallHeader={"Project Deliverables"} 
        bigHeader={["Show Your", <br key="ugh"/>,  "Creative", <br key="ugh2"/>, "Ideas"]}
      />
      <h1>Deliverables Page</h1>
    </Page>
  );
};

export default Deliverables;

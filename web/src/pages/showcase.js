import React from "react";
import Page from "../templates/page";

import Hero from '../components/hero'

const Showcase = (props) => {

  return (
    <Page>
      <Hero 
        smallHeader={"Team Showcase"} 
        bigHeader={["It's", <br key="ugh"/>,  "Showtime"]}
      />
      <h1>Showcase Page</h1>
    </Page>
  );
};

export default Showcase;

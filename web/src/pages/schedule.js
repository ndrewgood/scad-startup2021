import React from "react";
import Page from "../templates/page";

import Hero from '../components/hero'


const Schedule = (props) => {

  return (
    <Page>
      <Hero 
        smallHeader={"Event Schedule"} 
        bigHeader={["What to", <br key="ugh"/>,  "Expect"]}
      />
      <p>schedule</p>
      <div className="schedule-grid">
      </div>
    </Page>
  );
};

export default Schedule;

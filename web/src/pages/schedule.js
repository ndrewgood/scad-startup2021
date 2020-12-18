import React from "react";
import Page from "../templates/page";

import Hero from '../components/hero'
import ResourceCardGrid from '../components/resource-card-grid'
import ScheduleCard from '../components/schedule-card'

import "../styles/schedule.scss"

const Schedule = (props) => {

  return (
    <Page>
      <Hero 
        smallHeader={"Event Schedule"} 
        bigHeader={["What to", <br key="ugh"/>,  "Expect"]}
      />
      <div className="container">
        <ResourceCardGrid>
          <ScheduleCard span={4}/>
          <ScheduleCard span={6}/>
          <ScheduleCard span={5}/>
          <ScheduleCard span={5}/>
          <ScheduleCard span={6}/>
          <ScheduleCard span={4}/>
          <ScheduleCard span={"full"}/>
        </ResourceCardGrid>
      </div>
    </Page>
  );
};

export default Schedule;

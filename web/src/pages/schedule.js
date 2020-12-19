import React from "react";
import Page from "../templates/page";

import Hero from '../components/hero'
import ResourceCardGrid from '../components/resource-card-grid'
import ResourceCard from '../components/resource-card'

import "../styles/schedule.scss"

const ScheduleCard = ({span}) => {
  return (
    <ResourceCard span={span}>
        <h3>Date</h3>
        <h2>Title</h2>
        <p>Description</p>
        <div className="schedule-itemTimeLink">
            <p>Time & meeting Link will be announced soon!</p>
        </div>
    </ResourceCard>
  );
};

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

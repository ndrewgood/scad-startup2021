import React from "react";
import Page from "../templates/page";

import Hero from '../components/hero'
import ScheduleItem from '../components/schedule-item'

import "../styles/schedule.scss"

const Schedule = (props) => {

  return (
    <Page>
      <Hero 
        smallHeader={"Event Schedule"} 
        bigHeader={["What to", <br key="ugh"/>,  "Expect"]}
      />
      <div className="container">
        <div className="schedule-grid">
          <ScheduleItem span={4}/>
          <ScheduleItem span={6}/>
          <ScheduleItem span={5}/>
          <ScheduleItem span={5}/>
          <ScheduleItem span={6}/>
          <ScheduleItem span={4}/>
          <ScheduleItem span={"full"}/>
        </div>
      </div>
    </Page>
  );
};

export default Schedule;

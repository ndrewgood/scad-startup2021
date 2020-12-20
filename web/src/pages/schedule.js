import React from "react";
import Page from "../templates/page";

import Hero from '../components/hero'
import ResourceCardGrid from '../components/resource-card-grid'
import ResourceCard from '../components/resource-card'

import "../styles/schedule.scss"

const ScheduleCard = ({span, bg, type}) => {
  return (
    <ResourceCard span={span} bg={bg} type="schedule">
        <div className="schedule-card-content">
          <h3 className="schedule-card-date">Date</h3>
          <h2 className="schedule-card-title">Title</h2>
          <p className="schedule-card-description">Description</p>
          <p className="schedule-card-timeLink">Time & meeting link will be announced soon!</p>
        </div>
        <div className="schedule-card-image">
          {/* Insert Image */}
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
          <ScheduleCard span={"full"} bg="gradient"/>
        </ResourceCardGrid>
      </div>
    </Page>
  );
};

export default Schedule;

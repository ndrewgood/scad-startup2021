import React from "react";
import ResourceCard from './resource-card'

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

export default ScheduleCard;

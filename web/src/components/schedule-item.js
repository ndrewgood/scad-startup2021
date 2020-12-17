import React from "react";

const ScheduleItem = ({span}) => {
  let gridClass ="";

  switch(span) {
    case 4:
      gridClass="schedule-gridSection span-4"
      break;
    case 5:
        gridClass="schedule-gridSection span-5"
      break;
    case 6:
        gridClass="schedule-gridSection span-6"
      break;
    case "full":
        gridClass="schedule-gridSection fullSpan"
      break;
    default:
      gridClass="schedule-gridSection"
      // code block
  }

  return (
    <div className={gridClass}>
        <h3>Date</h3>
        <h2>Title</h2>
        <p>Description</p>
        <div className="schedule-itemTimeLink">
            <p>Time & meeting Link will be announced soon!</p>
        </div>
    </div>
  );
};

export default ScheduleItem;

import React from "react";

const NumberedTitle = ({number, title}) => {
  return (
    <div className="resource-card-numberedTitle">
        <div className="resource-card-number">{number}</div>
        <h2>{title}</h2>
    </div>
  );
};

export default NumberedTitle;

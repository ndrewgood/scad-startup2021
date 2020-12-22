import React from "react";

import '../styles/resource-card.scss'

const resourceCard = ({span, bg, children, direction, type}) => {
  let cardClass ="resourceCard";

  switch(span) {
    case "4":
      cardClass+=" span-4"
      break;
    case "5":
      cardClass+=" span-5"
      break;
    case "6":
      cardClass+=" span-6"
      break;
    case "full":
      cardClass+=" fullSpan"
      break;
  }

  switch(direction) {
    case "column":
      cardClass+=" resource-card-column"
      break;
  }

  switch(bg) {
    case "gradient":
      cardClass+=" resource-card-gradient"
      break;
  }

  switch(type) {
    case "schedule":
      cardClass+=" schedule-card"
      break;
    case "schedule-flipped":
      cardClass+=" schedule-card flipped"
      break;
    case "faq":
      cardClass+=" faq-card"
      break;
  }

  return (
    <div className={cardClass}>
        {children}
    </div>
  );
};

export default resourceCard;

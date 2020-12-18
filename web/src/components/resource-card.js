import React from "react";

import '../styles/resource-card.scss'

const resourceCard = ({span, bg, children, type}) => {
  let cardClass ="resourceCard";

  switch(span) {
    case 4:
      cardClass+=" span-4"
      break;
    case 5:
      cardClass+=" span-5"
      break;
    case 6:
      cardClass+=" span-6"
      break;
    case "full":
      cardClass+=" fullSpan"
      break;
  }

  switch(type) {
    case "faq":
      cardClass+=" resource-card-faq"
      break;
  }

  return (
    <div className={cardClass}>
        {children}
    </div>
  );
};

export default resourceCard;

import React from "react";
import ResourceCard from './resource-card' 
import NumberedTitle from './numbered-title'

const DeliverableCard = ({span, deliverableTitle, deliverableDescription, cardNumber}) => {
  return (
    <ResourceCard span={span} direction="column">
        <NumberedTitle title={deliverableTitle} number={cardNumber}/>
        <p>{deliverableDescription}</p>
        {/* Image */}
    </ResourceCard>
  );
};

export default DeliverableCard;

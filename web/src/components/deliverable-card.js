import React from "react";
import ResourceCard from './resource-card' 

const DeliverableCard = ({span, sectionTitle}) => {
  return (
    <ResourceCard span={span} type="faq">
        <h2>{sectionTitle}</h2>
    </ResourceCard>
  );
};

export default DeliverableCard;

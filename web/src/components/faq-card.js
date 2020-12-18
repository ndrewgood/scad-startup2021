import React from "react";
import ResourceCard from './resource-card'
import FAQQuestion from './faq-question'

const FAQCard = ({span, sectionTitle}) => {
  return (
    <ResourceCard span={span} type="faq">
        <h2>{sectionTitle}</h2>
        <FAQQuestion/>
    </ResourceCard>
  );
};

export default FAQCard;

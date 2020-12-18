import React from "react";
import ResourceCard from './resource-card'
import FAQQuestion from './faq-question'
import NumberedTitle from './numbered-title'

const FAQCard = ({sectionTitle, cardNumber, questions}) => {
  return (
    <ResourceCard direction="column">
        <NumberedTitle number={cardNumber} title={sectionTitle}/>
        <FAQQuestion number={1} question="This is the question?" answer="this is the answer to the question"/>
    </ResourceCard>
  );
};

export default FAQCard;

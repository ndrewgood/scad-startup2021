import React from "react";
import Page from "../templates/page";

import Hero from '../components/hero'
import ResourceCardGrid from '../components/resource-card-grid'
import ResourceCard from '../components/resource-card' 
import NumberedTitle from '../components/numbered-title'

const DeliverableCard = ({span, deliverableTitle, deliverableDescription, cardNumber}) => {
  return (
    <ResourceCard span={span} direction="column">
        <NumberedTitle title={deliverableTitle} number={cardNumber}/>
        <p>{deliverableDescription}</p>
        {/* Image */}
    </ResourceCard>
  );
};

const Deliverables = (props) => {

  return (
    <Page>
      <Hero 
        smallHeader={"Project Deliverables"} 
        bigHeader={["Show Your", <br key="ugh"/>,  "Creative", <br key="ugh2"/>, "Ideas"]}
      />
      <div className="container">
        <ResourceCardGrid>
          <div className="span-5">
            <DeliverableCard deliverableTitle="Presentation Deck" deliverableDescription="here is a random description"  cardNumber="1"/>
            <DeliverableCard deliverableTitle="Business Model" deliverableDescription="here is a random description" cardNumber="3"/>
          </div>
          <div className="span-5">
            <DeliverableCard deliverableTitle="Visual Prototype" deliverableDescription="here is a random description"  cardNumber="2"/>
            <DeliverableCard deliverableTitle="WOW Factor" deliverableDescription="here is a random description"  cardNumber="4"/>
          </div>
        </ResourceCardGrid>
      </div>
    </Page>
  );
};

export default Deliverables;

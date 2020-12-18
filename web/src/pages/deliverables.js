import React from "react";
import Page from "../templates/page";

import Hero from '../components/hero'
import ResourceCardGrid from '../components/resource-card-grid'
import DeliverableCard from '../components/deliverable-card'

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

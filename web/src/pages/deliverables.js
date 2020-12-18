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
            <DeliverableCard sectionTitle="Presentation Deck"/>
            <DeliverableCard sectionTitle="Business Model"/>
          </div>
          <div className="span-5">
            <DeliverableCard sectionTitle="Visual Prototype"/>
            <DeliverableCard sectionTitle="WOW Factor"/>
          </div>
        </ResourceCardGrid>
      </div>
    </Page>
  );
};

export default Deliverables;

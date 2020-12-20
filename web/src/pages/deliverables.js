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
            <DeliverableCard deliverableTitle="Presentation Deck" deliverableDescription="Students will wow the judges with a digital slideshow to explain their idea and area of impact that their new product will have."  cardNumber="1"/>
            <DeliverableCard deliverableTitle="Business Model" deliverableDescription={["Determine how your solution will make an impact and generate revenue.", <br/>, "Download the business model PDF here."]} cardNumber="3"/>
          </div>
          <div className="span-5">
            <DeliverableCard deliverableTitle="Visual Prototype" deliverableDescription="Students need to provide an example of their concept through a prototype that they can show the judges, either in digital or physical form."  cardNumber="2"/>
            <DeliverableCard deliverableTitle="WOW Factor" deliverableDescription="What else makes your solution stand out from others? Bring posters, vision films, stickers, clothing, anything you’d like!"  cardNumber="4"/>
          </div>
        </ResourceCardGrid>
      </div>
    </Page>
  );
};

export default Deliverables;

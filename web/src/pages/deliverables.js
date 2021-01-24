import React from "react";
import Page from "../templates/page";

import Hero from '../components/hero'
import ResourceCardGrid from '../components/resource-card-grid'
import ResourceCard from '../components/resource-card' 
import NumberedTitle from '../components/numbered-title'
import Theme from '../components/theme'

import deckImage from '../assets/images/deckImage.png'
import businessModelImage from '../assets/images/businessModelImage.png'
import prototypeImage from '../assets/images/prototypeImage.png'
import wowImage from '../assets/images/wowImage.png'

import '../styles/deliverables.scss'

const DeliverableCard = ({span, deliverableTitle, deliverableDescription, cardNumber, image}) => {
  return (
    <ResourceCard span={span} direction="column">
        <NumberedTitle title={deliverableTitle} number={cardNumber}/>
        <p>{deliverableDescription}</p>
        <div className="deliverables-imageContainer">
          <img src={image} alt="" srcset=""/>
        </div>
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
          <div className="span-5 webResource">
            <DeliverableCard deliverableTitle="Presentation Deck" deliverableDescription="Students will wow the judges with a digital slideshow to explain their idea and area of impact that their new product will have."  cardNumber="1" image={deckImage}/>
            <DeliverableCard deliverableTitle="Business Model" deliverableDescription={["Determine how your solution will make an impact and generate revenue.", <br/>, "Download the business model PDF here."]} cardNumber="3" image={businessModelImage}/>
          </div>
          <div className="span-5 webResource">
            <DeliverableCard deliverableTitle="Visual Prototype" deliverableDescription="Students need to provide an example of their concept through a prototype that they can show the judges, either in digital or physical form."  cardNumber="2" image={prototypeImage}/>
            <DeliverableCard deliverableTitle="WOW Factor" deliverableDescription="What else makes your solution stand out from others? Bring posters, vision films, stickers, clothing, anything you’d like!"  cardNumber="4" image={wowImage}/>
          </div>

          <div className="fullSpan mobileResource">
            <DeliverableCard deliverableTitle="Presentation Deck" deliverableDescription="Students will wow the judges with a digital slideshow to explain their idea and area of impact that their new product will have."  cardNumber="1" image={deckImage}/>
            <DeliverableCard deliverableTitle="Visual Prototype" deliverableDescription="Students need to provide an example of their concept through a prototype that they can show the judges, either in digital or physical form."  cardNumber="2" image={prototypeImage}/>
            <DeliverableCard deliverableTitle="Business Model" deliverableDescription={["Determine how your solution will make an impact and generate revenue.", <br/>, "Download the business model PDF here."]} cardNumber="3" image={businessModelImage}/>
            <DeliverableCard deliverableTitle="WOW Factor" deliverableDescription="What else makes your solution stand out from others? Bring posters, vision films, stickers, clothing, anything you’d like!"  cardNumber="4" image={wowImage}/>
          </div>
          
        </ResourceCardGrid>
      </div>
      <Theme />
    </Page>
  );
};

export default Deliverables;

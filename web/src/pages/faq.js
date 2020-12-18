import React from "react";
import Page from "../templates/page";

import Hero from '../components/hero';
import ResourceCardGrid from '../components/resource-card-grid'
import FAQCard from '../components/faq-card'

const Faq = (props) => {

  return (
    <Page>
      <Hero 
        smallHeader={"Frequently Asked Questions"} 
        bigHeader={["Have Any", <br key="ugh"/>,  "Questions?"]}
      />
      <div className="container">
        <ResourceCardGrid>
          <div className="span-5">
            <FAQCard sectionTitle="Eligibility" cardNumber="A"/>
            <FAQCard sectionTitle="During the Event" cardNumber="C"/>
          </div>
          <div className="span-5">
            <FAQCard sectionTitle="Registration" cardNumber="B"/>
          </div>
        </ResourceCardGrid>
      </div>
    </Page>
  );
};

export default Faq;

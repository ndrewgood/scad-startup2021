import React from "react";
import Page from "../templates/page";

import Hero from '../components/hero';
import ResourceCardGrid from '../components/resource-card-grid'

import ResourceCard from '../components/resource-card'
import FAQQuestion from '../components/faq-question'
import NumberedTitle from '../components/numbered-title'

import '../styles/faq.scss'

const FAQCard = ({sectionTitle, cardNumber, faqs}) => {

  return (
    <ResourceCard direction="column" type="faq">
        <NumberedTitle number={cardNumber} title={sectionTitle}/>

        {
          faqs.map((faq, index) => ( 
            <FAQQuestion 
              number={index+1} 
              question={faq.question}
              answer={faq.answer}/>
          ))
        }
    </ResourceCard>
  );
};

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
            <FAQCard sectionTitle="Eligibility" cardNumber="A" faqs={[{question: "this is the first question", answer: "this is the answer to that question"}, {question: "this is the second question", answer: "this is the answer to the second question"}]}/>
            <FAQCard sectionTitle="During the Event" cardNumber="C" faqs={[{question: "hello", answer: "bye"}]}/>
          </div>
          <div className="span-5">
            <FAQCard sectionTitle="Registration" cardNumber="B" faqs={[{question: "hello", answer: "bye"}]}/>
          </div>
        </ResourceCardGrid>
      </div>
    </Page>
  );
};

export default Faq;

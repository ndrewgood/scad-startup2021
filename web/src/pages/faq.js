import React from "react";
import {graphql, useStaticQuery} from 'gatsby';
import Page from "../templates/page";

import Hero from '../components/hero';
import ResourceCardGrid from '../components/resource-card-grid';

import ResourceCard from '../components/resource-card';
import NumberedTitle from '../components/numbered-title';

import '../styles/faq.scss';

const FAQQuestion = ({number, question, answer}) => {
  return (
    <div className="faq-question">
        <h4>{number}. {question}</h4>
        <p>{answer}</p>
    </div>
  );
};

const FAQCard = ({sectionTitle, cardNumber, faqs}) => {

  return (
    <ResourceCard direction="column" type="faq">
        <NumberedTitle number={cardNumber} title={sectionTitle}/>

        {
          faqs.map((faq, index) => ( 
            <FAQQuestion 
              number={index+1} 
              key={faq._key} 
              question={faq.question}
              answer={faq.answer}/>
          ))
        }
    </ResourceCard>
  );
};

const Faq = (props) => {
  const data = useStaticQuery(graphql`
    query qnaQuery{
      allSanityFaq(sort: {order: ASC, fields: order}) {
        edges {
          node {
            _id
            title
            order
            qnaList {
              _key
              question
              answer
            }
          }
        }
      }
    }
  `)

  const faqArray = data.allSanityFaq.edges;
  //console.log(faqArray);

  let faqColumn1 = [];
  let faqColumn2 = [];

  faqArray.map((faqSection, index) => ((index+1)%2) ? faqColumn1.push(faqSection) : faqColumn2.push(faqSection));

  //console.log(faqColumn1);
  //console.log(faqColumn2);

  return (
    <Page>
      <Hero 
        smallHeader={"Frequently Asked Questions"} 
        bigHeader={["Have Any", <br key="ugh"/>,  "Questions?"]}
      />
      <div className="container">
        <ResourceCardGrid>
          <div className="span-5  webFAQ">
            {
              faqColumn1.map((edge) => (
                <FAQCard
                  key={edge.node._id} 
                  sectionTitle={edge.node.title}
                  cardNumber={edge.node.order} 
                  faqs={edge.node.qnaList}
                  />
              ))
            }
          </div>
          <div className="span-5 webFAQ">
            {
              faqColumn2.map((edge) => (
                <FAQCard
                  key={edge.node._id}  
                  sectionTitle={edge.node.title}
                  cardNumber={edge.node.order} 
                  faqs={edge.node.qnaList}
                  />
              ))
            }
          </div>
          <div className="fullSpan mobileFAQ">
            {
              faqArray.map((edge) => (
                <FAQCard
                  key={edge.node._id}  
                  sectionTitle={edge.node.title}
                  cardNumber={edge.node.order} 
                  faqs={edge.node.qnaList}
                  />
              ))
            }
          </div>
        </ResourceCardGrid>
      </div>
    </Page>
  );
};

export default Faq;

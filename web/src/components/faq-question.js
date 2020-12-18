import React from "react";

const FAQQuestion = ({number, question, answer}) => {
  return (
    <div className="faq-question">
        <h4>{number}. {question}</h4>
        <p>{answer}</p>
    </div>
  );
};

export default FAQQuestion;

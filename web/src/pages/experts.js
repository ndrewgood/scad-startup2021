import React from "react";
import Page from "../templates/page";

import Hero from '../components/hero'
import ComingSoon from '../assets/images/coming-soon.png'



const ExpertsPage = (props) => {

  return (
    <Page>
      <Hero 
        smallHeader={"Shout out to our"} 
        bigHeader={["Experts and", <br key="ugh"/>, "Mentors"]}
      />
      <div className="partners-team-partners">
        <div className="partners-team-partners-info container">
          <h2>StartUp<br /><span>Experts and Mentors</span></h2>
        </div>
        <img className="partners-team-comingSoon" src={ComingSoon} alt=""/>
      </div>
    </Page>
  );
};

export default ExpertsPage;

import React from "react";
import Page from "../templates/page";

import Hero from '../components/hero'
import ComingSoon from '../assets/images/coming-soon.png'


const Showcase = (props) => {

  return (
    <Page>
      <Hero 
        smallHeader={"Team Showcase"} 
        bigHeader={["It's", <br key="ugh"/>,  "Showtime"]}
      />
      <div className="partners-team-partners">
        <div className="partners-team-partners-info container">
          <h2><span>Team</span><br />Showcase</h2>
        </div>
        <img className="partners-team-comingSoon" src={ComingSoon} alt=""/>
      </div>
    </Page>
  );
};

export default Showcase;

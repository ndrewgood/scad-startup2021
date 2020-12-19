import React from "react";
import Page from "../templates/page";

import Hero from '../components/hero'
import Henry from '../assets/images/henry-test.png'

import '../styles/partners-team.scss'

const TeamCard = (props) => {
  let fname = props.name.split(" ")[0];
  let lname = props.name.split(" ")[1];
  console.log(fname);
  return(
    <a href="/"className="partners-team-teamCard">
    <img src={Henry} alt="" srcset=""/>
    <div>
      <h3>{fname}<br/>{lname}</h3>
      <p>{props.role}</p>
    </div>
  </a>
  )
}

const PartnersTeam = (props) => {

  return (
    <Page>
      <Hero 
        smallHeader={"Special Thanks to our"} 
        bigHeader={["Partners", <br key="ugh"/>, "and the", <br key="ugh2"/>, "StartUp Team"]}
      />
      <div className="partners-team-partners">
        <div className="partners-team-partners-info container">
          <h2>Our Partners<br /> and Supporters</h2>
        </div>
      </div>
      <div className="partners-team-team">
        <h2>The Amazing StartUp 2021 Team</h2>
        <div className="partners-team-teamCardsGrid container">
          <TeamCard name="Henry Tran" role="Co-Director"/>
          <TeamCard name="Henry Tran" role="Co-Director"/>
          <TeamCard name="Henry Tran" role="Co-Director"/>
          <TeamCard name="Henry Tran" role="Co-Director"/>
          <TeamCard name="Henry Tran" role="Co-Director"/>
          <TeamCard name="Henry Tran" role="Co-Director"/>
          <TeamCard name="Henry Tran" role="Co-Director"/>
          <TeamCard name="Henry Tran" role="Co-Director"/>
          <TeamCard name="Henry Tran" role="Co-Director"/>
          <TeamCard name="Henry Tran" role="Co-Director"/>
          <TeamCard name="Henry Tran" role="Co-Director"/>

        </div>
      </div>
    </Page>
  );
};

export default PartnersTeam;

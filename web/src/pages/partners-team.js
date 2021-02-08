import React from "react";
import {useStaticQuery} from 'gatsby';
import Page from "../templates/page";

import Hero from '../components/hero'
import ComingSoon from '../assets/images/coming-soon.png'
import SEDA from '../assets/svg/partners-seda.svg'
import Youtube from '../assets/svg/partners-youtube.svg'
import GeorgiaPower from '../assets/svg/partners-georgiapower.svg'
import Uber from '../assets/svg/partners-uber.svg'
import Thnks from '../assets/images/partners-thanks.png'


import '../styles/partners-team.scss'

const TeamCard = (props) => {
  let fname = props.name.split(" ")[0];
  let lname = props.name.split(" ")[1];
  console.log(fname);
  return(
    <a rel="noopener noreferrer" target="_blank" href={props.link} className="partners-team-teamCard">
    <img src={props.picture} alt="" srcset=""/>
    <div>
      <h3>{fname}<br/>{lname}</h3>
      <p>{props.title}</p>
    </div>
  </a>
  )
}

const PartnersTeam = (props) => {

  const data = useStaticQuery(graphql`
  query teamQuery {
    allSanityStartupTeamMember(sort: {fields: order}) {
      edges {
        node {
          name
          link
          picture {
            asset {
              url
            }
          }
          title
          shown
        }
      }
    }
  }
  
`)

const teamArray = data.allSanityStartupTeamMember.edges;


  return (
    <Page>
      <Hero 
        smallHeader={"Special Thanks to our"} 
        bigHeader={["Partners", <br key="ugh"/>, "and the", <br key="ugh2"/>, "StartUp Team"]}
      />
      <div className="partners-team-partners">
        <div className="partners-team-partners-info container">
          <h2><span>Our Partners</span><br /> and Supporters</h2>
          <div className="partners-team-partnerLogoContainer">
            <div className="partners-team-partnerLogoRow">
              <a target="_blank" href="https://seda.org/" lassName="partners-team-partnerLogoLink"><img className="partners-team-partnerLogoBig" src={SEDA} alt=""/></a>
            </div>
            <div className="partners-team-partnerLogoRow">
              <a target="_blank" href="https://www.youtube.com/" className="partners-team-partnerLogoLink"><img className="partners-team-partnerLogoSmall" src={Youtube} alt=""/></a>
              <a target="_blank" href="https://www.georgiapower.com/" className="partners-team-partnerLogoLink"><img className="partners-team-partnerLogoSmall" src={GeorgiaPower} alt=""/></a>
            </div>
            <div className="partners-team-partnerLogoRow">
              <a target="_blank" href="https://www.uber.com/" className="partners-team-partnerLogoLink"><img className="partners-team-partnerLogoSmall" src={Uber} alt=""/></a>
              <a target="_blank" href="https://www.thnks.com/" className="partners-team-partnerLogoLink"><img className="partners-team-partnerLogoSmallImage" src={Thnks} alt=""/></a>
            </div>
          </div>
        </div>
        {/* <img className="partners-team-comingSoon" src={ComingSoon} alt=""/> */}
      </div>
      <div className="partners-team-team container">
        <h2>The Amazing<br /><span>StartUp 2021 Team</span></h2>
        <div className="partners-team-teamCardsGrid container">
          {
            teamArray.map((edge) => (
            edge.node.shown === true ?
              <TeamCard 
                name={edge.node.name}
                picture={edge.node.picture.asset.url}
                title={edge.node.title}
                link={edge.node.link}
              /> :
              null
            ))
          }
        </div>
      </div>
    </Page>
  );
};

export default PartnersTeam;

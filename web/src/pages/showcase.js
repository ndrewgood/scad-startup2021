import React from "react";
import {useStaticQuery} from 'gatsby';

import Page from "../templates/page";
import Hero from '../components/hero'
import ComingSoon from '../assets/images/coming-soon.png'
import ShowcaseArrow from '../assets/svg/showcase-arrow.svg'

import '../styles/showcase.scss'

const ShowcaseCard = (props) => (
  <a className={"showcase-card " + props.color} target="_blank" href={props.link}>
    <p>{props.name}</p>
    <img src={ShowcaseArrow} alt=""/>
  </a>
)

const Showcase = (props) => {

  const data = useStaticQuery(graphql`
  query showcaseQuery {
    allSanityTeam {
      edges {
        node {
          id
          shown
          teamName
          track
          zoomLink
        }
      }
    }
  }
`)

const showcaseArray = data.allSanityTeam.edges;

console.log(showcaseArray);

  return (
    <Page>
      <Hero 
        smallHeader={"Team Showcase"} 
        bigHeader={["It's", <br key="ugh"/>,  "Showtime"]}
      />
      {
       showcaseArray.some(i => i.node.shown == true) ? 
       <div className="showcase-background">
         <div className="showcase-container container">
           <div className="showcase-description-container">
            <p className="showcase-description">Welcome to the StartUp Showcase page! Here you will be able to see all the projects created at StartUp 2021. You can even vote for your favorites and give them the chance to win the fan-favorite prize.</p>
            <a className="nav-registerButton mobileNav-registerButton showcase-voteButton" target="_blank" rel="noopener noreferrer" href="https://forms.gle/Aq9sE4TDwCm8Ppgb8">Vote For Your Favorites</a>
           </div>
           <div className="showcase-track-container">
             <h2><span className="blue-highlight">Entrepreneurship</span> Track</h2>
             <div className="showcase-track-grid">
             {
                showcaseArray.map((edge) => (
                edge.node.shown === true && edge.node.track == "global" ?
                  <ShowcaseCard 
                    name={edge.node.teamName}
                    link={edge.node.zoomLink}
                    color="showcase-card-blue"
                  /> :
                  null
                ))
              }
             </div>
           </div>
           <div className="showcase-track-container">
             <h2><span className="red-highlight">Local Business</span> Track</h2>
             <div className="showcase-track-grid">
             {
                showcaseArray.map((edge) => (
                edge.node.shown === true && edge.node.track == "local" ?
                  <ShowcaseCard 
                    name={edge.node.teamName}
                    link={edge.node.zoomLink}
                    color="showcase-card-red"
                  /> :
                  null
                ))
              }
             </div>
           </div>
         </div>
       </div>:
       <div className="partners-team-partners partners-team-partners-cs">
       <div className="partners-team-partners-comingSoonContainer container">
         <h2><span>Team</span><br />Showcase</h2>
       </div>
       <img className="partners-team-comingSoon" src={ComingSoon} alt=""/>
     </div>
      }

    </Page>
  );
};

export default Showcase;

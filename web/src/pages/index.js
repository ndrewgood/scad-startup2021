import React from "react";
import Page from "../templates/page";

import ScrollAnimation from "react-animate-on-scroll";

// images
import Ideate from "../assets/svg/Ideate.svg";
import Design from "../assets/svg/Design.svg";
import Create from "../assets/svg/Create.svg";
import DownArrow from "../assets/svg/DownArrow.svg";
import IllyOne from "../assets/images/IllyOne.png";
import ThreeHundred from "../assets/svg/ThreeHundred.svg";
import Thirty from "../assets/svg/Thirty.svg";
import Fifty from "../assets/svg/Fifty.svg";
import TwentySix from "../assets/svg/TwentySix.svg";
import TopLine from "../assets/svg/TopLine.svg";
import BottomLine from "../assets/svg/BottomLine.svg";
import Gallery from "../assets/images/gallery.png";
import Balloons from "../assets/gif/balloons.gif";
// import StartupBig from "../assets/svg/StartupBig.svg";

// scss
import "../styles/hero-home.scss";
import "../styles/general.scss";

const IndexPage = props => {
  return (
    <Page>
      <main className="main-body">
        <div className="hero container">
          <div className="hero-words">
            <h2>With StartUp, you can...</h2>
            <img src={Ideate} alt="ideate" />
            <img src={Design} alt="ideate" />
            <img src={Create} alt="ideate" />
          </div>
          <img className="down-arrow" src={DownArrow} alt="down-arrow" />
        </div>

        {/* about section */}
        <div className="about">
          <div className="about-position">
            <div className="about-text">
              <h1>
                One Week to <span className="red-highlight">Design</span>
              </h1>
              <p>
                <span className="big-desc">
                  {" "}
                  SCAD StartUp is our annual, week-long design sprint hosted by{" "}
                  <a
                    className="middle"
                    href="https://scadflux.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="blue-highlight">FLUX - the UX club </span>
                  </a>{" "}
                  in collaboration with{" "}
                  <a
                    className="middle"
                    href="https://scad.edu/scadpro"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="blue-highlight">SCADpro</span>
                  </a>{" "}
                </span>
                <br />
                <br />
                StartUp provides you the toolkit and resources needed to create a professional
                product or service concept in just under seven days. Make connections and get tips
                from real life designers, and pitch your solution to professional industry leaders.
                Who knows, maybe you’ll even take your product to launch!
                <br />
                <br />
                It’s pretty much Shark Tank, just not on TV (yet).
              </p>
            </div>
            <div>
              <img className="about-image" src={IllyOne} alt="illy" />
            </div>
          </div>
        </div>

        {/* Gallery */}
        <div>
          <img className="gallery-img" src={Gallery} alt="gallery" />
        </div>

        {/* Startup Numbers */}
        <div className="stats-section">
          <div className="stats-container">
            <p className="stats-title">In 2020, StartUp Reached...</p>
            <div className="startup-numbers">
              <div>
                <img className="three-hundred" src={ThreeHundred} alt="three hundred" />
                <p>Individuals</p>
              </div>

              <div>
                <img src={Fifty} alt="thirty" />
                <p>Teams</p>
              </div>

              <div>
                <img src={TwentySix} alt="three hundred" />
                <p>Majors</p>
              </div>

              <div>
                <img src={Thirty} alt="three hundred" />
                <p>Mentors</p>
              </div>
            </div>
          </div>
        </div>

        {/* are you ready for this year */}
        <div className="balloon-wrapper balloons">
          <ScrollAnimation style={{ height: "100vh" }} animateIn="fadeIn" delay="500">
            <img className="balloons-width fade-in" src={Balloons} alt="balloons" />
          </ScrollAnimation>
          <div className="ready">
            <img src={TopLine} />
            <p>Are you READY for this year?</p>
            {/* <img src={Balloons} alt="confetti" /> */}
            <img src={BottomLine} />
          </div>
        </div>

        {/* StartUp 2021 */}
        <div className="startupBig"></div>

        {/* different */}
        <div className="container different">
          <h1>
            We Do Things <span className="red-highlight">Different</span> This Year
          </h1>
          <p>
            StartUp 2021 will be <span className="red-highlight">fully virtual</span> and have two
            different tracks! These tracks allow participants from freely coming up with creative
            business solutions to giving back to the community by helping small businesses that have
            been nagatively impacted by the global pandemic.
          </p>
        </div>
      </main>
    </Page>
  );
};

export default IndexPage;

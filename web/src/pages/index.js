import React from "react";
import Page from "../templates/page";

// images
import Ideate from '../assets/Ideate.svg';
import Design from '../assets/Design.svg';
import Create from '../assets/Create.svg';
import DownArrow from '../assets/DownArrow.svg';
import IllyOne from '../assets/IllyOne.png';
import ThreeHundred from '../assets/ThreeHundred.svg';
import Thirty from '../assets/Thirty.svg';
import Fifty from '../assets/Fifty.svg';
import TwentySix from '../assets/TwentySix.svg';
import TopLine from '../assets/TopLine.svg';
import BottomLine from '../assets/BottomLine.svg';
import StartupBig from '../assets/StartupBig.svg';

// scss
import "../styles/hero-home.scss"
import "../styles/general.scss"


const IndexPage = (props) => {

  return (
    <Page>
    <main className="">
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
          <div className="container about-text">
            <h1>One Week to <span className="red-highlight">Design</span></h1>
            <p>
          <span className="big-desc"> SCAD StartUp is our annual, week-long design sprint hosted by <span className="blue-highlight">FLUX - the UX club </span> in collaboration with <span className="blue-highlight">SCADpro</span> </span>
    <br /><br />
            StartUp provides you the toolkit and resources needed to create a professional product or service concept in just under seven days. Make connections and get tips from real life designers, and pitch your solution to professional industry leaders. Who knows, maybe you’ll even take your product to launch!
    <br /><br />
            It’s pretty much Shark Tank, just not on TV (yet).
            </p>
          </div>
          <div className="about-image">
            <img src={IllyOne} alt="illy" />
          </div>
      </div>
      </div>

    {/* Startup Numbers */}
    <div className="stats-section">
      <p className="container">In 2020, StartUp Reached...</p>  
      <div className="startup-numbers">
        <div>
        <img src={ThreeHundred} alt="three hundred" />
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

    {/* are you ready for this year */}
    <div className="container ready">
      <img src={TopLine} />
      <p>Are you READY for this year?</p>
      <img src={BottomLine} />
    </div>

    {/* StartUp 2021 */}
    <div className="startupBig"></div>

    {/* different */}
    <div className="container different">
      <h1>We Do Things <span className="red-highlight">Different</span> This Year</h1>
      <p>StartUp 2021 will be <span className="red-highlight">fully virtual</span> and have two different tracks ! These tracks allow participants from freely coming up with creative business solutions to giving back to the community by helping small businesses that have been nagatively impacted by the global pandemic.</p>
    </div>
    </main>
    </Page>
  );
};

export default IndexPage;

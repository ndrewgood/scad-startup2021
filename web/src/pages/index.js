import React, { useState } from "react";
import Page from "../templates/page";
import { Transition } from "react-transition-group";
import ScrollAnimation from "react-animate-on-scroll";
import AliceCarousel from "react-alice-carousel";
// import "react-alice-carousel/lib/alice-carousel.css";

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
import Confetti from "../assets/gif/confetti.gif";
import Dude from "../assets/images/dude.png";
// import TrackOneImg from '../assets/images/track-local.png'
// import TrackTwoImg from '../assets/images/track-entrepreneurship.png'
// import StartupBig from "../assets/svg/StartupBig.svg";
import one from "../assets/carousel/StartUp_01.jpg";
import two from "../assets/carousel/StartUp_02.jpg";
import three from "../assets/carousel/StartUp_03.jpg";
import four from "../assets/carousel/StartUp_04.jpg";
import five from "../assets/carousel/StartUp_05.jpg";
import six from "../assets/carousel/StartUp_06.jpg";
import seven from "../assets/carousel/StartUp_07.jpg";
// import eight from "../assets/carousel/StartUp_08.jpg";
// import nine from "../assets/carousel/StartUp_09.jpg";
// import ten from "../assets/carousel/StartUp_10.jpg";
import eleven from "../assets/carousel/StartUp_11.jpg";
import twelve from "../assets/carousel/StartUp_12.jpg";
import thirteen from "../assets/carousel/StartUp_13.jpg";
import fourteen from "../assets/carousel/StartUp_14.jpg";
import blue from "../assets/images/blue.png";

// scss
import "../styles/hero-home.scss";
import "../styles/general.scss";
import "../styles/home-tracks.scss";
import "../styles/carousel.scss";

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 }
};

// const handleDragStart = (e) => e.preventDefault();

const items = [
  <div className="item" data-value="1">
    <img className="carousel-image" src={one} />
  </div>,
  <div className="item" data-value="2">
    <img className="carousel-image" src={two} />
  </div>,
  <div className="item" data-value="3">
    <img className="carousel-image" src={three} />
  </div>,
  <div className="item" data-value="4">
    <img className="carousel-image" src={four} />
  </div>,
  <div className="item" data-value="5">
    <img className="carousel-image" src={five} />
  </div>,
  <div className="item" data-value="6">
    <img className="carousel-image" src={six} />
  </div>,
  <div className="item" data-value="7">
    <img className="carousel-image" src={seven} />
  </div>,
  // <div className="item" data-value="8"><img className="carousel-image" src={eight} /></div>,
  // <div className="item" data-value="9"><img className="carousel-image" src={nine} /></div>,
  // <div className="item" data-value="10"><img className="carousel-image" src={ten} /></div>,
  <div className="item" data-value="11">
    <img className="carousel-image" src={eleven} />
  </div>,
  <div className="item" data-value="12">
    <img className="carousel-image" src={twelve} />
  </div>,
  <div className="item" data-value="13">
    <img className="carousel-image" src={thirteen} />
  </div>,
  <div className="item" data-value="14">
    <img className="carousel-image" src={fourteen} />
  </div>
];
// slider
//Duration of Animation
const duration = 300;

//Default styles of info container
const defaultStyle = {
  transition: `${duration}ms ease-in-out`,
  transitionProperty: "opacity, right",
  // transitionDelay: '0ms'
  opacity: 0,
  right: 0
};

//Changing styles depending on state of mount
const transitionStyles = {
  entering: { right: -30, opacity: 1, transitionDelay: `${duration}ms` },
  entered: { right: 0, opacity: 1 },
  exiting: { right: -30, opacity: 0 },
  exited: { right: -30, opacity: 0 }
};

const TrackOne = ({ in: inProp }) => (
  //rtg component, in determines when to turn on and off the component
  <Transition in={inProp} timeout={duration}>
    {state => (
      //pass style in with state of mount
      <div
        className="track-infoContainer"
        style={{
          ...defaultStyle,
          ...transitionStyles[state]
        }}
      >
        <h1 className="track-trackHeader">
          Giving Back To
          <br />
          Your <span>Locals</span>
        </h1>
        <p className="track-trackBody">
          We here at StartUp want to be able to give back. During the global pandemic, small
          businesses have been hit the hardest. We want to offer students a second track, the
          ability to be able to work hands-on with a local small business to Savannah or Atlanta,
          and find their unique set of problems and what they’d do to solve it.
          <br />
          <br />
          <i>*Judging criteria will be different for each track</i>
        </p>
      </div>
    )}
  </Transition>
);

const TrackTwo = ({ in: inProp }) => (
  <Transition in={inProp} timeout={duration}>
    {state => (
      <div
        className="track-infoContainer"
        style={{
          ...defaultStyle,
          ...transitionStyles[state]
        }}
      >
        <h1 className="track-trackHeader">
          <span>Entrepreneurship</span>
          <br />
          The core of StartUp
        </h1>
        <p className="track-trackBody">
          This is the core of StartUp. Students who shoose this track will becoming up with their
          own, new innovative business ideas about their created product or service. Here, student
          designers have the most free reign to design a creative solution to the problem we present
          them with. This has, and will always be, StartUp’s core.
          <br />
          <br />
          <i>*Judging criteria will be different for each track</i>
        </p>
      </div>
    )}
  </Transition>
);

const IndexPage = props => {
  const [track, setTrack] = useState(1);

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
        {/* <div>
          <img className="gallery-img" src={Gallery} alt="gallery" />
        </div> */}

        <AliceCarousel
          mouseTracking
          autoPlay
          autoPlayInterval="1500"
          infinite
          items={items}
          responsive={responsive}
        />

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
            <img className="balloons-width fade-in" src={Confetti} alt="balloons" />
          </ScrollAnimation>
          <div className="ready">
            <img src={TopLine} alt="top line" />
            <p>Are you READY for this year?</p>
            {/* <img src={Balloons} alt="confetti" /> */}
            <img src={BottomLine} alt="bottom-line" />
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

        {/* slider */}
        <div className="track-grid">
          <div>
            <img src={Dude} alt="dude" />
          </div>
          <div className="track-container">
            <div className="track-buttonContainer">
              <button onClick={() => setTrack(1)}>Track 1</button>
              <button onClick={() => setTrack(2)}>Track 2</button>
              <div
                id="track-buttonBackground"
                className={
                  track === 1
                    ? "track-buttonBackground"
                    : "track-buttonBackground track-rightbutton"
                }
              ></div>
            </div>
            <div className="track-animationContainer ">
              {track === 1 ? (
                <>
                  <TrackOne in={true} />
                  <TrackTwo in={false} />
                </>
              ) : (
                <>
                  <TrackOne in={false} />
                  <TrackTwo in={true} />
                </>
              )}
            </div>
          </div>

          {track === 1 ? <></> : <></>}
        </div>
      </main>
    </Page>
  );
};

export default IndexPage;

import React, { useState } from "react";
import Page from "../templates/page";
import { Transition } from 'react-transition-group';

import Hero from '../components/hero'

import '../styles/theme.scss'

//Duration of Animation
const duration = 300;

//Default styles of info container 
const defaultStyle = {
  transition: `${duration}ms ease-in-out`,
  transitionProperty: "opacity, left",
  // transitionDelay: '0ms'
  opacity: 0,
  left: 0
  }

  //Changing styles depending on state of mount
  const transitionStyles = {
    entering: {left: -30, opacity: 1, transitionDelay: `${duration}ms` },
    entered:  {left: 0, opacity: 1 },
    exiting:  {left: -30, opacity: 0},
    exited:  {left: -30, opacity: 0},
  };


const TrackOne = ({in: inProp}) => (
  //rtg component, in determines when to turn on and off the component
  <Transition in={inProp} timeout={duration}>
    {state => (
      //pass style in with state of mount
      <div className="theme-infoContainer" style={{
        ...defaultStyle,
        ...transitionStyles[state]
      }}>
        <h1 className="theme-trackHeader">Giving Back To<br />Your Locals</h1>
        <p className="theme-trackBody">We here at StartUp want to be able to give back. During the global pandemic, small businesses have been hit the hardest. We want to offer students a second track, the ability to be able to work hands-on with a local small business to Savannah or Atlanta, and find their unique set of problems and what they’d do to solve it.<br/><i>*Judging criteria will be different for each track</i></p>
      </div>
    )}
  </Transition>
)


const TrackTwo = ({in: inProp}) => (
  <Transition in={inProp} timeout={duration}>
    {state => (
      <div className="theme-infoContainer" style={{
        ...defaultStyle,
        ...transitionStyles[state]
      }}>
        <h1 className="theme-trackHeader">Entrepreneurship<br />The core of StartUp</h1>
        <p className="theme-trackBody">This is the core of StartUp. Students who shoose this track will becoming up with their own, new innovative business ideas about their created product or service. Here, student designers have the most free reign to design a creative solution to the problem we present them with. This has, and will always be, StartUp’s core.<br /><i>*Judging criteria will be different for each track</i></p>
      </div>
    )}
  </Transition>
)

const Theme = (props) => {

  const [track, setTrack] = useState(1);

  return (
    <Page>
      <Hero 
        smallHeader={"StartUp 2021 - Two Track System"} 
        bigHeader={["Two Ways", <br key="ugh"/>,  "To Design", <br key="ugh2"/>, "Fully Virtual"]}
      />
      <div className="theme-main">
        <div className="theme-buttonContainer">
          <button onClick={() => setTrack(1)}>Track 1</button>
          <button onClick={() => setTrack(2)}>Track 2</button>
        </div>
        <div className="theme-animationContainer">
          {track == 1 ?
          <>
            <TrackOne in={true} />
            <TrackTwo in={false} />
          </> : 
          <>
            <TrackOne in={false} />
            <TrackTwo in={true} />
          </>}
        </div>
      </div>
      {/* Footer */}
    </Page>
  );
};

export default Theme;

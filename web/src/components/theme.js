import React, { useState } from "react";
import { Transition } from 'react-transition-group';

import Hero from './hero'

import '../styles/theme.scss'

import TrackOneImg from '../assets/images/track-local.png'
import TrackTwoImg from '../assets/images/track-entrepreneurship.png'

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

//Default styles of images 
const defaultStyleImage = {
  transition: `${duration}ms ease-in-out`,
  transitionProperty: "opacity, right",
  // transitionDelay: '0ms'
  opacity: 0,
  right: 0
}

//Changing styles depending on state of mount
const transitionStylesImage = {
  entering: {right: -30, opacity: 1, transitionDelay: `${duration}ms` },
  entered:  {right: 0, opacity: 1 },
  exiting:  {right: -30, opacity: 0},
  exited:  {right: -30, opacity: 0},
};

const TrackOne = ({in: inProp}) => (
  //rtg component, in determines when to turn on and off the component
  <Transition in={inProp} timeout={duration}>
    {state => (
      //pass style in with state of mount
      <div className="theme-infoContainer container" style={{
        ...defaultStyle,
        ...transitionStyles[state]
      }}>
        <h1 className="theme-trackHeader">Giving Back To<br />Your <span>Locals</span></h1>
        <p className="theme-trackBody">We here at StartUp want to be able to give back. During the global pandemic, small businesses have been hit the hardest. We want to offer students a second track, the ability to be able to work hands-on with a local small business to Savannah or Atlanta, and find their unique set of problems and what they’d do to solve it.<br/><br/><i>*Judging criteria will be different for each track</i></p>
      </div>
    )}
  </Transition>
)

const TrackTwo = ({in: inProp}) => (
  <Transition in={inProp} timeout={duration}>
    {state => (
      <div className="theme-infoContainer container" style={{
        ...defaultStyle,
        ...transitionStyles[state]
      }}>
        <h1 className="theme-trackHeader"><span>Entrepreneurship</span><br />The core of StartUp</h1>
        <p className="theme-trackBody">This is the core of StartUp. Students who shoose this track will becoming up with their own, new innovative business ideas about their created product or service. Here, student designers have the most free reign to design a creative solution to the problem we present them with. This has, and will always be, StartUp’s core.<br /><br/><i>*Judging criteria will be different for each track</i></p>
      
      </div>
    )}
  </Transition>
)

const TrackOneImage = ({in: inProp}) => (
  <Transition in={inProp} timeout={duration}>
    {state => (
      <img className="theme-trackImage" src={TrackOneImg} alt="" style={{
        ...defaultStyleImage,
        ...transitionStylesImage[state]
      }}/>
    )}
  </Transition>
)

const TrackTwoImage = ({in: inProp}) => (
  <Transition in={inProp} timeout={duration}>
    {state => (
      <img className="theme-trackImage" src={TrackTwoImg} alt="" style={{
        ...defaultStyleImage,
        ...transitionStylesImage[state]
      }}/>
    )}
  </Transition>
)

const Theme = (props) => {

  const [track, setTrack] = useState(1);

  return (
    <>
      <Hero 
        smallHeader={"StartUp 2021 - Two Track System"} 
        bigHeader={["Two Ways", <br key="ugh"/>,  "To Design", <br key="ugh2"/>, "Fully Virtual"]}
      />
      <div className="theme-main">
        <div className="theme-buttonContainer">
          <button onClick={() => setTrack(1)}>Track 1</button>
          <button onClick={() => setTrack(2)}>Track 2</button>
          <div id="theme-buttonBackground" className={ track === 1 ? "theme-buttonBackground" : "theme-buttonBackground theme-buttonRight"}></div>
        </div>
        <div className="theme-animationContainer container">
          {track === 1 ?
          <>
            <TrackOne in={true} />
            <TrackTwo in={false} />
          </> : 
          <>
            <TrackOne in={false} />
            <TrackTwo in={true} />
          </>}
        </div>
        {track === 1 ?
          <>
            <TrackOneImage in={true} />
            <TrackTwoImage in={false} />
          </> : 
          <>
            <TrackOneImage in={false} />
            <TrackTwoImage in={true} />
          </>}

      </div>
      {/* Footer */}
    </>
  );
};

export default Theme;

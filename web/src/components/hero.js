import React from "react";

import '../styles/hero.scss'

const Hero = (props) => {

  // Just some notes for later:
  // * I think we're gonna need to also pass props for top and bottom padding
  //   Just because its hard to do that automatically
  //   But its not a problem for rn

  return (
    <div className="hero-container">
      <div className="hero-itemContainer">
        <h2 className="hero-smallHeader">{props.smallHeader}</h2>
        <h1 className="hero-bigHeader">{props.bigHeader}</h1>
      </div>
    </div>
  );
};

export default Hero;

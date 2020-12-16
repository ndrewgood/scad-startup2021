import React from "react";
import Page from "../templates/page";

import Hero from '../components/hero'


const Theme = (props) => {

  return (
    <Page>
      {/* Nav */}
      <Hero 
        smallHeader={"StartUp 2021 - Two Track System"} 
        bigHeader={["Two Ways", <br key="ugh"/>,  "To Design", <br key="ugh"/>, "Fully Virtual"]}
      />
      <div className="theme-main">
        {/*Track Button*/}

        {/*Might wanna make a component for the information part because of the two tracks*/}
        <div className="theme-information">

        </div>
      </div>
      {/* Footer */}
    </Page>
  );
};

export default Theme;

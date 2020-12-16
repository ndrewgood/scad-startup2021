import React from "react";
import Page from "../templates/page";


const PartnersTeam = (props) => {

  return (
    <Page>
      {/* Nav */}
      {/* Hero */}
      <div className="partners-team-partners">
        <h2>Our Partners and Supporters</h2>
      </div>
      <div className="partners-team-team">
        <h2>The Amazing StartUp 2021 Team</h2>
        <div className="partners-team-teamCardsGrid">
          {/*load cards from sanity*/}
        </div>
      </div>
    </Page>
  );
};

export default PartnersTeam;

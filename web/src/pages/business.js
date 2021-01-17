import React, {useEffect} from "react";
import Page from "../templates/page";

// window.onload = function() {
//     // similar behavior as clicking on a link
//     window.location.href = "http://stackoverflow.com";
// }





const Business = (props) => {

  useEffect(() => {
    if (typeof window !== "undefined"){
      window.onload = function() {
          // similar behavior as clicking on a link
          window.location.href = "https://forms.gle/5gPieSiSUY6FQtbaA";
      }
    }
  }, []);

  return (
    <Page>
    </Page>
  );
};

export default Business;
import React from "react";
import {Link} from 'gatsby'

import '../styles/footer.scss'


const Footer = () => {


  return (
    <footer>
      <div className="container">
        <div className="footer-logosContainer">
          {/*Change p tag to svg or img but keep the styles*/}
          <p className="footer-logo">FLUX Logo</p>
          <p className="footer-logo">SCADpro Logo</p>
        </div>
        <div className="footer-links">
          <ul className="footer-socialLinks">
            <li>Instagram</li>
            <li>Facebook</li>
            <li>Medium</li>
          </ul>
          <p className="footer-registerButton">Register</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
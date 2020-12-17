import React from "react";
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
            <li><a href="">Instagram</a></li>
            <li><a href="">Facebook</a></li>
            <li><a href="">Medium</a></li>
          </ul>
          <a href="" className="footer-registerButton">Register</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
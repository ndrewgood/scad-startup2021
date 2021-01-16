import React from "react";
import '../styles/footer.scss'

import FluxLogo from '../assets/svg/footer-flux.svg'
import ScadproLogo from '../assets/svg/footer-scadpro.svg'
import InstagramLogo from '../assets/svg/footer-instagram.svg'
import FacebookLogo from '../assets/svg/footer-facebook.svg'
import DiscordLogo from '../assets/svg/footer-discord.svg'





const Footer = () => {


  return (
    <footer>
      <div className="container">
        <div className="footer-logosContainer">
          {/*Change p tag to svg or img but keep the styles*/}
          <a className="footer-logo" rel="noopener noreferrer" target="_blank" href="https://scadflux.com/"><img  src={FluxLogo} alt="Flux Logo" /></a>
          <a className="footer-logo" rel="noopener noreferrer" target="_blank" href="https://www.scad.edu/about/scadpro"><img src={ScadproLogo} alt="SCADpro Logo" /></a>
        </div>
        <div className="footer-links">
          <div className="footer-socialLinks">
            <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/scadflux/"><img src={InstagramLogo} alt="Instagram Logo" /></a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/groups/scadflux"><img src={FacebookLogo} alt="Facebook Logo" /></a>
            <a target="_blank" rel="noopener noreferrer" href="https://discord.gg/FMJ4tY8"><img src={DiscordLogo} alt="Discord Logo" /></a>
          </div>
          <a style={{marginTop:"0"}} target="_blank" rel="noopener noreferrer" href="https://forms.gle/3RYmCA1XgufbTMgS8" className="nav-registerButton">Register</a>
          <a className="footer-smallBusiness" rel="noopener noreferrer" target="_blank" href="https://forms.gle/5gPieSiSUY6FQtbaA">Small Business Application</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
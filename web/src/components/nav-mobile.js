import React, { useState } from "react";
import { Link } from 'gatsby';
import { Transition } from 'react-transition-group';

import '../styles/nav.scss'

import StartUp from '../assets/svg/startup-logo.svg'
import Hamburger from '../assets/svg/mobileNav-hamburger.svg'
import MenuX from '../assets/svg/mobileNav-x.svg'
import InstagramLogo from '../assets/svg/footer-instagram.svg'
import FacebookLogo from '../assets/svg/footer-facebook.svg'
import DiscordLogo from '../assets/svg/footer-discord.svg'

//Duration of Animation
const duration = 300;

const defaultStyleMenu = {
  transition: `${duration}ms ease-in-out`,
  transitionProperty: "right",
  right: '-80%'
}

const defaultStyleBackground = {
  transition: `${duration}ms ease-in-out`,
  transitionProperty: "opacity",
  opacity: '0'
}

const transitionStylesMenu = {
  entering: {right: '-80%', display: "flex"},
  entered:  {right: "0%" },
  exiting:  {right: '-80%'},
  exited:  {right: '-80%', display: "none"},
};

const transitionStylesBackground = {
  entering: {opacity: 0, display: "flex" },
  entered:  {opacity: 1 },
  exiting:  {opacity: 0 },
  exited:  {opacity: 0, display: "none" },
};


const NavMobile = () => {

  const [menuStatus, setMenuStatus] = useState(false);

  return (
    <>
      <Transition in={menuStatus} timeout={menuStatus ? 0 : duration}>
        {state => (
          <div className="mobileNav-menu" style={{
            ...defaultStyleBackground,
            ...transitionStylesBackground[state]
          }}>
            <div className="mobileNav-menuContainer" style={{
            ...defaultStyleMenu,
            ...transitionStylesMenu[state]
          }}>
              <div className="mobileNav-menuTop">
                <div></div>
                <button onClick={() => setMenuStatus(!menuStatus)} className="mobileNav-x"><img src={MenuX} alt="Close Button" /></button>
              </div>
              <div className="mobileNav-menuLinks">
                <Link onClick={() => setMenuStatus(false)} activeClassName="mobileNav-active" to="/deliverables" className="mobileNav-startupLogo">Deliverables</Link>
                <Link onClick={() => setMenuStatus(false)} activeClassName="mobileNav-active" to="/schedule" className="mobileNav-startupLogo">Schedule</Link>
                <Link onClick={() => setMenuStatus(false)} activeClassName="mobileNav-active" to="/faq" className="mobileNav-startupLogo">FAQ</Link>
                <Link onClick={() => setMenuStatus(false)} activeClassName="mobileNav-active" to="/showcase" className="mobileNav-startupLogo">Showcase</Link>
                <Link onClick={() => setMenuStatus(false)} activeClassName="mobileNav-active" to="/experts" className="mobileNav-startupLogo">Experts</Link>
                <Link onClick={() => setMenuStatus(false)} activeClassName="mobileNav-active" to="/partners-team" className="mobileNav-startupLogo">Partners</Link>
              </div>
              {/*<a className="nav-registerButton mobileNav-registerButton" target="_blank" rel="noopener noreferrer" href="https://forms.gle/3RYmCA1XgufbTMgS8">Register</a>*/}
              <a className="nav-registerButton mobileNav-registerButton" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/p/CLfXfmIMaiY/">View Winners</a>
              {/* <a className="footer-smallBusiness mobileNav-smallBusiness" rel="noopener noreferrer" target="_blank" href="https://forms.gle/5gPieSiSUY6FQtbaA">Small Business Application</a> */}
              <div id="mobileNav-socialLinks" className="footer-socialLinks">
                <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/scadflux/"><img src={InstagramLogo} alt="Instagram Logo" /></a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/groups/scadflux"><img src={FacebookLogo} alt="Facebook Logo" /></a>
                <a target="_blank" rel="noopener noreferrer" href="https://discord.gg/FMJ4tY8"><img src={DiscordLogo} alt="Discord Logo" /></a>
              </div>
            </div>
          </div>
        )} 
        </Transition>
      <nav className="mobileNav">
        <div className="mobileNav-container">
          <Link to="/" className="mobileNav-startupLogo"><img src={StartUp} alt="StartUp Logo" /></Link>
        <button onClick={() => setMenuStatus(!menuStatus)} className="mobileNav-button"><img src={Hamburger} alt="Hamburger Button" /></button>
        </div>
      </nav>

    </>
  );
};

export default NavMobile;

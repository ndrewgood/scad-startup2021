import React, { useState } from "react";
import { Link } from 'gatsby';
import '../styles/nav.scss'

import StartUp from '../assets/svg/startup-logo.svg'
import Hamburger from '../assets/svg/mobileNav-hamburger.svg'
import MenuX from '../assets/svg/mobileNav-x.svg'


const NavMobile = () => {

  const [menuStatus, setMenuStatus] = useState(false);

  return (
    <>
      <div className={menuStatus ? "mobileNav-menu showMenu" : "mobileNav-menu"}>
        <div className="mobileNav-menuContainer">
          <div className="mobileNav-menuTop">
            <div></div>
            <button onClick={() => setMenuStatus(!menuStatus)} className="mobileNav-x"><img src={MenuX} alt="Close Button" /></button>
          </div>
        </div>
      </div>
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

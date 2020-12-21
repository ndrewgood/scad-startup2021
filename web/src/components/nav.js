import React from "react";
import { Link } from 'gatsby';
import '../styles/nav.scss'

import StartUp from '../assets/svg/startup-logo.svg'

const Nav = () => {


  return (
    <nav className="desktopNav">
      <Link to="/" className="nav-startupLogo"><img src={StartUp} alt="StartUp Logo" /></Link>
      <ul className="nav-itemContainer">
        <div className="nav-subMenuContainer">
          <li>Resources</li>
          <ul className="nav-subMenuItems">
            <Link to="/theme">Theme</Link>
            <Link to="/schedule">Schedule</Link>
            <Link to="/deliverables">Deliverables</Link>
            <Link to="/faq">FAQ</Link>
          </ul>
        </div>
        <Link to="/showcase">Showcase</Link>
        <Link to="/experts">Experts</Link>
        <Link to="/partners-team">Partners</Link>
      </ul>
      <a className="nav-registerButton">Register</a>
    </nav>
  );
};

export default Nav;

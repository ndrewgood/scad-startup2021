import React from "react";
import { Link } from 'gatsby';
import '../styles/nav.scss'

import StartUp from '../assets/svg/startup-logo.svg'

const Nav = () => {


  return (
    <nav className="desktopNav">
      <Link to="/" className="nav-startupLogo"><img src={StartUp} alt="StartUp Logo" /></Link>
      <ul className="nav-itemContainer">
        <Link activeClassName="nav-active" to="/deliverables">Deliverables</Link>
        <Link activeClassName="nav-active" to="/schedule">Schedule</Link>
        <Link activeClassName="nav-active" to="/faq">FAQ</Link>
        <Link activeClassName="nav-active" to="/showcase">Showcase</Link>
        <div className="nav-subMenuContainer">
          <li>Team</li>
          <ul className="nav-subMenuItems">
            <Link activeClassName="nav-active" to="/experts">Experts</Link>
            <Link activeClassName="nav-active" to="/partners-team">Partners</Link>
          </ul>
        </div>
      </ul>
      <a className="nav-registerButton" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/p/CLfXfmIMaiY/">View Winners</a>
    </nav>
  );
};

export default Nav;

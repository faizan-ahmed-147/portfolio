import React, { useState } from "react";
import "../componenetCss/Home.css";
import logo from "../img/logo3.png";
import ham from "../img/ham2.png";
import { Link } from "react-router-dom";

const Navbar = () => {

  // Toogle Menu
  const [show, setShow] = useState(false);
  return (
    <div className="navbar-container" id="navbar-container">
      {/* <div className="home__bg"> */}
      <div className="header d__flex align__items__center pxy__30">
        <div className="navbar">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div className="navbar_content">
            <ul className="d__flex">

              <li className="nav__items mx__15"><Link to="/">Home </Link></li>
              <li className="nav__items mx__15"><Link to="/About">About </Link></li>
              <li className="nav__items mx__15"><Link to="/Service">Services </Link></li>
              <li className="nav__items mx__15"><Link to="/Project">Portfolio </Link></li>
              <li className="nav__items mx__15"><Link to="/Contact">Contact </Link></li>


            </ul>
          </div>
        </div>

        {/* Toogle Menu */}
        <div className="toggle__menu">
          <div className="ham" onClick={() => setShow(!show)}>
            <img src={ham} alt="" srcset="" />

          </div>
        </div>
        {show ? (
          <div className="sideNavbar">
            <ul className="sidebar d__flex">
              <li className="sideNavbar">
                <Link to="/">Home</Link>
              </li>
              <li className="sideNavbar">
                <Link to="/About">About</Link>
              </li>
              <li className="sideNavbar">
                <Link to="/Service">Services</Link>
              </li>
              <li className="sideNavbar">
                <Link to="/Project">Portfolio</Link>
              </li>
              <li className="sideNavbar">
                <Link to="/Contact">Contact</Link>
              </li>
            </ul>
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default Navbar
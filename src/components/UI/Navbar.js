import React from "react";

import MenuLogo from "../../assets/navbar/cole_type.png";

import "./Navabar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div id="menuToggle">
        <input type="checkbox" className="menu-hamburger" />

        <span></span>
        <span></span>
        <span></span>

        <ul id="menu">
          <div className="menu-logo">
            <img
              src={MenuLogo}
              className="menu-logo__image"
              alt="menu-logo-cole-skate"
            />
          </div>

          <div className="menu-content">
            <a href="/">
              <div>HOME</div>
            </a>
            <a href="/">
              <div>CLOTHING</div>
            </a>
            <a href="/">
              <div>SKATEBOARDS</div>
            </a>
            <a href="/">
              <div>FOOTWEAR</div>
            </a>
            <a href="/">
              <div>ACCESORIES</div>
            </a>
            <a href="/">
              <div>BLOG</div>
            </a>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

import React from "react";

import MenuLogo from "../../assets/navbar/cole_type.png";

import NavbarMenu from "../Navbar/NavbarMenu";

import "./Navabar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="menu-logo-left">
        <img
          src={MenuLogo}
          className="menu-logo__image"
          alt="menu-logo-cole-skate"
        />
      </div>

      <div id="menuToggle">
        <input type="checkbox" className="menu-hamburger" />

        <span></span>
        <span></span>
        <span></span>
        <NavbarMenu />
      </div>
    </div>
  );
};

export default Navbar;

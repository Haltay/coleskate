import React from "react";

import NavbarLogo from "../Navbar/NavbarLogo";

import NavbarMenu from "../Navbar/NavbarMenu";

import "./Navabar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="menu-logo-left">
        <NavbarLogo />
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

import React from "react";

import NavbarMenu from "../Navbar/NavbarMenu";

import "./Navabar.css";

const Navbar = () => {
  return (
    <div className="navbar">
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

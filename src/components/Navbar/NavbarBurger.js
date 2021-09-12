import React from "react";
import Navbar from "../UI/Navbar";

import "./NavbarBurger.css";

const NavbarBurger = () => {
  return (
    <div id="menuToggle">
      <input type="checkbox" className="menu-hamburger" />

      <span></span>
      <span></span>
      <span></span>
      <Navbar />
    </div>
  );
};

export default NavbarBurger;

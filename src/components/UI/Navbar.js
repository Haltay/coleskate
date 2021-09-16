import React from "react";

import NavbarLogo from "../Navbar/NavbarLogo";
import NavbarMenu from "../Navbar/NavbarMenu";

import "./Navbar.scss";

const Navbar = () => {
  const NoScroll = () => {
    document.body.classList.toggle("no-scroll");
  };

  return (
    <div className="navbar col-12">
      <div className="container-fluid">
        <div className="menu-logo-left">
          <NavbarLogo />
        </div>

        <div id="menuToggle">
          <input
            type="checkbox"
            className="menu-hamburger"
            aria-label="Open/Close Menu"
            onClick={NoScroll}
          />

          <span></span>
          <span></span>
          <span></span>
          <NavbarMenu />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

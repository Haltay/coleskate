import React from "react";

import NavbarLogo from "./NavbarLogo";
import FooterListRight from "../footer/FooterListRight";


import "./NavbarMenu.css";

const NavbarMenu = () => {
  return (
    <ul id="menu">
      <div className="menu-logo">
      <NavbarLogo />
      </div>

      <div className="menu-content">
        <div className="menu-content-text">
          <a href="/">HOME</a>
        </div>

        <div className="menu-content-text">
        <a href="/">CLOTHING</a>
        </div>

        <div className="menu-content-text">
        <a href="/">SKATEBOARDS</a>
        </div>

        <div className="menu-content-text">
        <a href="/">FOOTWEAR</a>
        </div>

        <div className="menu-content-text">
        <a href="/">ACCESORIES</a>
        </div>

        <div className="menu-content-text">
        <a href="/">BLOG</a>
        </div>
      </div>
      <div className="menu-bottom">
        <FooterListRight />
      </div>
    </ul>
  );
};

export default NavbarMenu;

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
        <li className="menu-content-text">
          <a href="/">HOME</a>
        </li>

        <li className="menu-content-text">
        <a href="/">CLOTHING</a>
        </li>

        <li className="menu-content-text">
        <a href="/">SKATEBOARDS</a>
        </li>

        <li className="menu-content-text">
        <a href="/">FOOTWEAR</a>
        </li>

        <li className="menu-content-text">
        <a href="/">ACCESORIES</a>
        </li>

        <li className="menu-content-text">
        <a href="/">BLOG</a>
        </li>
      </div>
      <div className="menu-bottom">
        <FooterListRight />
      </div>
    </ul>
  );
};

export default NavbarMenu;

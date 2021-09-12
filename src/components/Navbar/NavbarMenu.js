import React from "react";

import MenuLogo from "../../assets/navbar/cole_type.png";

import FooterListRight from "../footer/FooterListRight";

import "./NavbarMenu.css";

const NavbarMenu = () => {
  return (
    <ul id="menu">
      <div className="menu-logo">
        <img
          src={MenuLogo}
          className="menu-logo__image"
          alt="menu-logo-cole-skate"
        />
      </div>

      <div className="menu-content">
        <div href="/" className="menu-content-text">
          HOME
        </div>

        <div href="/" className="menu-content-text">
          CLOTHING
        </div>

        <div href="/" className="menu-content-text">
          SKATEBOARDS
        </div>

        <div href="/" className="menu-content-text">
          FOOTWEAR
        </div>

        <div href="/" className="menu-content-text">
          ACCESORIES
        </div>

        <div href="/" className="menu-content-text">
          BLOG
        </div>
      </div>
      <div className="menu-bottom">
        <FooterListRight />
      </div>
    </ul>
  );
};

export default NavbarMenu;

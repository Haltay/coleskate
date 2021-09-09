import React from "react";

import Logo from "../../assets/header/cole_skateboard.png";
import Company from "../../assets/header/cole_type_reverse.png";

import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-logo">
        <img src={Logo} className="header-logo__image" alt="logo-cole-skate" />
      </div>
      <div className="header-company">
        <img
          src={Company}
          className="header-company__image"
          alt="company-cole-skate"
        />
      </div>
      <h1 className="header-title"> THE HOME OF SKATEBOARDING</h1>
      <div className="header-content">
        <div>Things change. Boards change, shoes change,</div>
        <div>tricks change, skaters change.</div>
      </div>
      <div className="header-learn-more">
       
        <div className="header-more1"> </div>
        <div className="header-more2"><a href="/">LEARN MORE</a></div>
      </div>
    </div>
  );
};

export default Header;

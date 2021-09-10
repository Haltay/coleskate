import React from "react";

import Logo from "../../assets/header/cole_skateboard.png";
import Company from "../../assets/header/cole_type_reverse.png";

import "./ImagesHeader.css";

const ImagesHeader = () => {
  return (
    <div className='header-images'>
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
    </div>
  );
};

export default ImagesHeader;

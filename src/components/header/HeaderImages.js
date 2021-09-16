import React from "react";

import Logo from "../../assets/header/cole_skateboard.png";
import Company from "../../assets/header/skate_type.png";

import "./HeaderImages.scss";

const ImagesHeader = () => {
  return (
    <div className=" col-2 header-images">
      <div className="header-logo">
        <img src={Logo}
        className="header-logo__image"
        alt="Cole Skate Logo" />
      </div>
      <div className="header-company">
        <img
          src={Company}
          className="header-company__image"
          alt="Cole Skate Logo Company"
        />
      </div>
    </div>
  );
};

export default ImagesHeader;

import React from "react";


import ImagesHeader from "../header/HeaderImages";
import ContentHeader from "../header/HeaderContent";
import LearnMoreHeader from "../header/HeaderLearnMore";

import "./Header.css";


const Header = () => {
  return (
    <div className="header">
      <ImagesHeader />
      <ContentHeader />
      <LearnMoreHeader />     
    </div>
  );
};

export default Header;

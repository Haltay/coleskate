import React from "react";


import ImagesHeader from "../header/ImagesHeader";
import ContentHeader from "../header/ContentHeader";
import LearnMoreHeader from "../header/LearnMoreHeader";

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

import React from "react";

import FooterListLeft from "../footer/FooterListLeft";
import FooterLogo from "../footer/FooterLogo";
import FooterListRight from "../footer/FooterListRight";

import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
    
      <FooterListLeft />
      <FooterLogo />
      <FooterListRight />
    </div>
  );
};

export default Footer;

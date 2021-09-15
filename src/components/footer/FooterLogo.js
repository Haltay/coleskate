import React from "react";

import FooterImage from "../../assets/footer/cole_type_reverse.png";

import "./FooterLogo.css";

const FooterLogo = () => {
  return (
    <div className="footer-middle">
      <img
        src={FooterImage}
        className="footer-logo"
        alt="Cole Skate Logo Company"
      />
    </div>
  );
};

export default FooterLogo;

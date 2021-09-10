import React from "react";

import FooterLogo from "../../assets/footer/cole_type_reverse.png";

import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-list">
        <p>
          <a href="/">DELIVERY</a> | {" "} 
          <a href="/">TERMS</a> | {" "}
          <a href="/">CONTACT US</a>
        </p>
      </div>

      <div>
        <img
          src={FooterLogo}
          className="footer-logo"
          alt="footer-logo-cole-skate"
        />
      </div>

      <div className="footer-list">
        <p>
          <a href="/">[0141] 370 321</a> | {" "} 
          <a href="/">EMAIL</a> | {" "}
          <a href="/">INSTA</a>
        </p>
      </div>
    </div>
  );
};

export default Footer;

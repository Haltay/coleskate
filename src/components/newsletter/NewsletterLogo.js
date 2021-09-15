import React from "react";

import LogoNewsletter from "../../assets/header/cole_skateboard.png";
import "./NewsletterLogo.css";

const NewsletterLogo = () => {
  return (
    <div className="newsletter-logo">
      <img
        src={LogoNewsletter}
        className="newsletter__image"
        alt="Cole Skate Logo"
      />
    </div>
  );
};

export default NewsletterLogo;

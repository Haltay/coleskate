import React from "react";

import LogoNewsletter from "../../assets/newsletter/cole_skateboard.png";
import "./NewsletterLogo.css";

const NewsletterLogo = () => {
  return (
    <div className="newsletter-logo">
      <img
        src={LogoNewsletter}
        className="newsletter__image"
        alt="cole-skate-newsletter"
      />
    </div>
  );
};

export default NewsletterLogo;

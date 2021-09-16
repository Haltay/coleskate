import React from "react";

import NewsletterLogo from "../newsletter/NewsletterLogo";
import NewsletterContent from "../newsletter/NewsletterContent";

import "./Newsletter.scss";

const Newsletter = () => {
  return (
    <div className="newsletter-card">
      <NewsletterLogo />
      <NewsletterContent />
    </div>
  );
};

export default Newsletter;

import React from "react";

import "./NewsletterContent.css";
import NewsletterSubscribe from "./NewsletterSubscribe";

const NewsletterContent = () => {
  return (
    <div className="newsletter-content-card">
      <div className="newsletter-content">
        <p className="newsletter-content__title">NEWSLETTER</p>
        <h2>STAY IN TOUCH!</h2>
        <p className="newsletter-content__text">
          Get the latest deals, news and gear from ColeSkate Co!
        </p>
      </div>
      <NewsletterSubscribe />
    </div>
  );
};

export default NewsletterContent;

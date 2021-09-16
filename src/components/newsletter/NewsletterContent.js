import React from "react";

import NewsletterSubscribe from "./NewsletterSubscribe";

import "./NewsletterContent.scss";

const NewsletterContent = () => {
  return (
    <div className="newsletter-content-card">
      <div className="newsletter-content">
        <p className="newsletter-content__title">NEWSLETTER</p>
        <h2>STAY IN TOUCH!</h2>
        <p className="newsletter-content__text">
          Get the latest deals, news and gear from Cole Skate Co!
        </p>
      </div>
      <div>
        <NewsletterSubscribe />
      </div>
    </div>
  );
};

export default NewsletterContent;

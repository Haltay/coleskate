import React from "react";

import Stars from "../../assets/reviews/stars_1.png";

import "./ReviewsContent.scss";

const ReviewsContent = () => {
  return (
    <div className="reviews-content">
      <p>FIVE STAR REVIEWS</p>
      <div className="reviews-image">
        <img
          src={Stars}
          className="reviews-image__stars"
          alt="cole-skate-reviews-five-stars"
        />
      </div>
      <p>Platinum Trusted Service - Feefo 2021</p>
    </div>
  );
};

export default ReviewsContent;

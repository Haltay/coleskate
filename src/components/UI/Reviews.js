import React from "react";

import ReviewsWaveTop from "../reviews/ReviewsWaveTop";
import ReviewsContent from "../reviews/ReviewsContent";

import "./Reviews.css";

const Reviews = () => {
  return (
    <div className="reviews-card">
      <ReviewsWaveTop />
      <ReviewsContent />
    </div>
  );
};

export default Reviews;

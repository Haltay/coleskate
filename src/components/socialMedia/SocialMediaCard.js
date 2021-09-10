import React from "react";

import ImageInterview from "../../assets/socialMedia/interview_image.jpg";
import ImageInstagram from "../../assets/socialMedia/social_image.jpg";

import "./SocialMediaCard.css";

const SocialMediaCard = () => {
  return (
    <>
      <div className="social-media-card">
        <div className="social-media-content">
          <h2>INTERVIEW WITH DEAWON SONG</h2>
          <p>
            We got to sit with Daewon at the London premier for a chat on "whate
            eles is out there"
          </p>
          <a href="/">READ MORE</a>
        </div>

        <div className="social-media-image">
          <img
            src={ImageInterview}
            className="social-media-image__interview"
            alt="interview-daewon-song"
          />
        </div>
      </div>

      <div className="social-media-card2">
        <div className="social-media-content">
          <h2>KEEP IT SOCIAL</h2>
          <p>
            Follow us on instagram for the latest tricks from the best skaters
            around the globe!
          </p>
          <a href="/">FOLLOW US</a>
        </div>

        <div className="social-media-image">
          <img
            src={ImageInstagram}
            className="social-media-image__instagram"
            alt="interview-daewon-song"
          />
        </div>
      </div>
    </>
  );
};

export default SocialMediaCard;

import React from "react";

import ImageInterview from "../../assets/socialMedia/interview_image.jpg";
import ImageInstagram from "../../assets/socialMedia/social_image.jpg";

import "./SocialMediaCard.css";

const SocialMediaCard = () => {
  return (
    <div className="social-media">
      <div className="social-media-card">
        <div className="social-media-content">
          <h2>INTERVIEW WITH DEAWON SONG</h2>
          <p>
            We got to sit with Daewon at the London premiere for a chat on "what
            else is out there"
          </p>

          <div className="social-media-image-sm">
            <img
              src={ImageInterview}
              className="social-media-image__interview"
              alt="Daewon Song Interview"
            />
          </div>

          <div className="social-media-animation">
            <a href="/" className="social-media-link" aria-label="Daewon Song Interview">
              READ MORE
            </a>
          </div>
        </div>

        <div className="social-media-image">
          <img
            src={ImageInterview}
            className="social-media-image__interview"
            alt="Daewon Song Interview"
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

          <div className="social-media-image-sm">
            <img
              src={ImageInstagram}
              className="social-media-image__instagram"
              alt="Cole Skate Product Instagram"
            />
          </div>

          <div className="social-media-animation">
            <a href="/" className="social-media-link" aria-label="Follow us on Instagram">
              FOLLOW US
            </a>
          </div>
        </div>

        <div className="social-media-image">
          <img
            src={ImageInstagram}
            className="social-media-image__instagram"
            alt="Cole Skate Product Instagram"
          />
        </div>
      </div>
    </div>
  );
};

export default SocialMediaCard;

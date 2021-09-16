import React from "react";

import "./HeaderLearnMore.scss";

const LearnMoreHeader = () => {
  return (
    <div className="header-learn-more">
      <div className="header-more1"> </div>
      <div className="header-more2">
        <div className="header-button">
          <a href="/" aria-label="More about Cole Skate">
            LEARN MORE
          </a>
        </div>
      </div>
    </div>
  );
};

export default LearnMoreHeader;

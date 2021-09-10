import React from "react";

import "./FooterList.css";

const FooterListLeft = () => {
    return (
        <div className="footer-list">
        <p>
          <a href="/">DELIVERY</a> | {" "} 
          <a href="/">TERMS</a> | {" "}
          <a href="/">CONTACT US</a>
        </p>
      </div>
    );
};

export default FooterListLeft;
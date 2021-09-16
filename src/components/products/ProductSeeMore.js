import React from "react";

import "./ProductSeeMore.scss";

const ProductSeeMore = () => {
  return (
    <div className="product-see-more">
      <div className="product-more1"> </div>
      <div className="product-more2">
        <div className="product-button">
          <a href="/" aria-label="More products">
            SEE MORE
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductSeeMore;

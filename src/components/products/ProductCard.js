import React from "react";

import Deck from "../../assets/product/deck_1.jpg";
import Hoodie from "../../assets/product/hoodie_1.jpg";
import Wheels from "../../assets/product/wheels_1.jpg";
import Shoes from "../../assets/product/shoes_1.jpg";

import "./ProductCard.scss";

const ProductCard = () => {
  return (
    <div className="product-cards">
      <div className="product-card-content">
        <a href="/">
          <div className="products-card-image">
            <img
              src={Deck}
              className="product-card__image"
              alt="Cole Skate Product Deck"
            />
          </div>
          <h3 className="product-card__description">
            RIPNDIP BUTTERFLY DECK LAVENDER - 8.25"
          </h3>
        </a>
      </div>

      <div className="product-card-content">
        <a href="/">
          <div className="products-card-image">
            <img
              src={Hoodie}
              className="product-card__image"
              alt="Cole Skate Product Hoodie"
            />
          </div>
          <h3 className="product-card__description">
            THRASHER MAG PULLOVER HOOD - BLACK
          </h3>
        </a>
      </div>

      <div className="product-card-content">
        <a href="/">
          <div className="products-card-image">
            <img
              src={Wheels}
              className="product-card__image"
              alt="Cole Skate Product Wheels"
            />
          </div>
          <h3 className="product-card__description">
            SPITFIRE WHEELS NATURAL/YELLOW - 55MM
          </h3>
        </a>
      </div>

      <div className="product-card-content">
        <a href="/">
          <div className="products-card-image">
            <img
              src={Shoes}
              className="product-card__image"
              alt="Cole Skate Product Shoes"
            />
          </div>
          <h3 className="product-card__description">
            DC SWITCH SKATE SHOE - WHITE/GUM
          </h3>
        </a>
      </div>
    </div>
  );
};

export default ProductCard;

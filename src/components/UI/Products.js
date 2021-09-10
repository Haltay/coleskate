import React from "react";

import Deck from "../../assets/product/deck_1.jpg";
import Hoodie from "../../assets/product/hoodie_1.jpg";
import Wheels from "../../assets/product/wheels_1.jpg";
import Shoes from "../../assets/product/shoes_1.jpg";

import "./Products.css";

const Products = () => {
  return (
    <div className="product">
      <div className="product-title">
        <h2 className="product-title__top">KEEP IT FRESH</h2>
        <p className="product-title__bottom">BRAND NEW PRODUCTS</p>
      </div>

      <div className="product-cards">
        <div className="product-card-content">
          <div className="product-card__image">
            <img
              src={Deck}
              className="header-logo__image"
              alt="cole-skate-product-deck"
            />
          </div>
          <div className="product-card__description">
            RIPNDIP BUTTERFLY DECK LAVENDER - 8.25"
          </div>
        </div>
      

      
        <div className="product-card-content">
          <div className="product-card__image">
            <img
              src={Hoodie}
              className="header-logo__image"
              alt="cole-skate-product-deck"
            />
          </div>
          <div className="product-card__description">
            THRASHER MAG PULLOVER HOOD - BLACK
          </div>
        </div>
      

      
        <div className="product-card-content">
          <div className="product-card__image">
            <img
              src={Wheels}
              className="header-logo__image"
              alt="cole-skate-product-deck"
            />
          </div>
          <div className="product-card__description">
            SPITFIRE WHEELS NATURAL/YELLOW - 55MM
          </div>
        </div>
     

        <div className="product-card-content">
          <div className="product-card__image">
            <img
              src={Shoes}
              className="header-logo__image"
              alt="cole-skate-product-deck"
            />
          </div>
          <div className="product-card__description">
            DC SWITCH SKATE SHOE - WHITE/GUM
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;

import React from "react";

import WaveProductTop from "../products/ProductWaveTop";
import ProductTitle from "../products/ProductTitle";
import ProductCard from "../products/ProductCard";
import ProductSeeMore from "../products/ProductSeeMore";
import ProductWaveBottom from "../products/ProductWaveBottom";

import "./Products.css";

const Products = () => {
  return (
    <>
      <div className="product">
        <WaveProductTop />
        <ProductTitle />
        <ProductCard />
        <ProductSeeMore />
        <ProductWaveBottom />
      </div>
    </>
  );
};

export default Products;

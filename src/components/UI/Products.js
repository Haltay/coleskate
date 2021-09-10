import React from "react";

import ProductTitle from "../products/ProductTitle";
import ProductCard from "../products/ProductCard";

import "./Products.css";
import ProductSeeMore from "../products/ProductSeeMore";


const Products = () => {
  return (
    <div className="product">
    <ProductTitle />
     <ProductCard />
     <ProductSeeMore />      
    </div>
  );
};

export default Products;

import React from "react";

import Header from "./components/UI/Header";
import Products from "./components/UI/Products";
import SocialMedia from "./components/UI/SocialMedia";
import Reviews from "./components/UI/Reviews";
import Newsletter from "./components/UI/Newsletter";
import Footer from "./components/UI/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <Products />
      <SocialMedia />
      <Reviews />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default App;

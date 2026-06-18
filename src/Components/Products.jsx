import React from "react";
import img from "../Images/4.png";
const Products = () => {
  return (
    <div className="home-container">
      <div className="home-text">
        <h1>Product Page</h1>
        <p>
          Explore our wide range of premium products, including smartphones,
          laptops, cameras, and other modern gadgets. Find the perfect item that
          matches your needs and lifestyle.
        </p>
        <p>
          Browse detailed product information, compare features, and discover
          the latest technology through a simple and user-friendly shopping
          experience.
        </p>
      </div>
      <div className="home-image">
        <img src={img} alt="GitHub illustration" />
      </div>
    </div>
  );
};

export default Products;

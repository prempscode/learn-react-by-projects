import React from "react";
import img from "../Images/1.png";
const About = () => {
  return (
    <div className="home-container">
      <div className="home-text">
        <h1>About Us</h1>
        <p>
          We are dedicated to providing high-quality products and exceptional
          customer service. Our goal is to make shopping simple, reliable, and
          enjoyable for every customer.
        </p>
        <p>
          With a passion for innovation and customer satisfaction, we strive to
          deliver the best products while building lasting relationships based
          on trust, quality, and value.
        </p>
      </div>
      <div className="home-image">
        <img src={img} alt="GitHub illustration" />
      </div>
    </div>
  );
};

export default About;

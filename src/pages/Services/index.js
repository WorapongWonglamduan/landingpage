import React from "react";
import "./index.css";
const index = () => {
  return (
    <section id="services" className="service">
      <h2>Discover Our Services</h2>
      <p>We provide the best food delivery service. Download our app now!</p>

      <div>
        <img
          src={require("../../assets/image/mobile-food-app.png")}
          alt="Food"
          className="img-mobile-food"
        />
      </div>

      <button className="download-btn">
        <span>Download App</span>
      </button>
    </section>
  );
};

export default index;

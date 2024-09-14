import React from "react";
import "./index.css";
const index = () => {
  return (
    <section className="gallery" id="gallery">
      <h2>Delicious Food Gallery</h2>
      <div className="gallery-images">
        <img src={require("../../assets/image/food-1.png")} alt="Food" />
        <img src={require("../../assets/image/food-2.png")} alt="Food" />
        <img src={require("../../assets/image/food-3.png")} alt="Food" />
        <img src={require("../../assets/image/food-4.png")} alt="Food" />
        <img src={require("../../assets/image/food-5.png")} alt="Food" />
        <img src={require("../../assets/image/food-6.png")} alt="Food" />
      </div>
    </section>
  );
};

export default index;

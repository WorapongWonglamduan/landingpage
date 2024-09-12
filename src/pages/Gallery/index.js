import React from "react";
import "./index.css";
const index = () => {
  return (
    <section className="gallery">
      <h2>Delicious Food Gallery</h2>
      <div className="gallery-images">
        <img src="food1.jpg" alt="Food 1" />
        <img src="food2.jpg" alt="Food 2" />
        <img src="food3.jpg" alt="Food 3" />
      </div>
    </section>
  );
};

export default index;

import React from "react";
import "./index.css";
const Index = () => {
  return (
    <div className="about" id="about">
      <div className="row">
        <div className="col-6">
          <h1>About </h1>
          <h3>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusantium,
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusantium, architecto consectetur consequatur debitis deserunt
            laudantium minus perferendis possimus, quo recusandae rem, vel
            veritatis! Iste, labore, laboriosam? Consectetur debitis illo, in
            necessitatibus neque nobis officia sequi.
          </p>
        </div>

        <div className="col-6">
          <img
            src={require("../../assets/image/food-8.png")}
            alt="Food"
            className="img"
          />
        </div>
      </div>
    </div>
  );
};

export default Index;

import React from "react";
import "./index.css";
const index = () => {
  return (
    <section className="testimonials">
      <div className="row">
        <div className="col-6">
          <img
            src={require("../../assets/image/food-9.png")}
            alt="Food"
            className="img"
          />
        </div>
        <div className="col-6">
          <h4>Lorem ipsum</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusantium, architecto consectetur consequatur debitis deserunt
            laudantium minus perferendis possimus, quo recusandae rem, vel
            veritatis! Iste, labore, laboriosam? Consectetur debitis illo, in
            necessitatibus neque nobis officia sequi.
          </p>
          <div className="wrap-profile">
            <img
              src={require("../../assets/image/food-9.png")}
              alt="Food"
              className="profile-img"
            />
            <h4>worapong</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;

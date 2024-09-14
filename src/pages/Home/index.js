import React, { useState, useEffect, useCallback } from "react";
import "./index.css";

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = document.getElementsByClassName("slide");

  const changeSlide = useCallback(
    (direction) => {
      setCurrentSlide(
        (prevSlide) => (prevSlide + direction + slides.length) % slides.length
      );
    },
    [slides.length]
  );

  useEffect(() => {
    const interval = setInterval(() => changeSlide(1), 3000);
    return () => clearInterval(interval);
  }, [changeSlide]);

  useEffect(() => {
    Array.from(slides).forEach((slide, index) => {
      slide.classList.toggle("active", index === currentSlide);
    });
  }, [currentSlide, slides]);

  return (
    <div id="home">
      <div className="slider">
        <div className="slide active">
          <img
            src={require("../../assets/image/about-bg.jpg")}
            alt="image1"
            className="image"
          />
        </div>
        <div className="slide">
          <img
            src={require("../../assets/image/bg3.png")}
            alt="image2"
            className="image"
          />
        </div>
        <div className="slide">
          <img
            src={require("../../assets/image/food-7.png")}
            alt="image2"
            className="image"
          />
        </div>

        {/* <div className="prev" onClick={() => changeSlide(-1)}>
      &#10094;
    </div>
    <div className="next" onClick={() => changeSlide(1)}>
      &#10095;
    </div> */}
      </div>
    </div>
  );
};

export default Index;

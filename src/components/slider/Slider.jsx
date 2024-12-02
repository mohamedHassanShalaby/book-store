import React, { useState } from "react";
import "./slider.css";
import book1 from "../../images/book1.png";
import book2 from "../../images/book2.png";
import book3 from "../../images/book3.png";
export const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  function handleClick(direction) {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  }
  return (
    <div className="slider-container">
      <i
        onClick={() => handleClick("left")}
        className="bi bi-chevron-double-left arrow-left"
      ></i>
      <div
        style={{ transform: `translateX(${slideIndex * -100}vw)` }}
        className="slider-wrapper"
      >
        <div className="slide first-slide">
          <div className="slide-img-wrapper">
            <img src={book1} alt="" />
          </div>
          <div className="slide-info-wrapper">
            <h1 className="slide-info-title">Book Store</h1>
            <p className="slide-info-desc">
              It's not just reading. it's living the adventure
            </p>
          </div>
        </div>
        <div className="slide second-slide">
          <div className="slide-img-wrapper">
            <img src={book2} alt="" />
          </div>
          <div className="slide-info-wrapper">
            <h1 className="slide-info-title">The Books For Everyone</h1>
            <p className="slide-info-desc">
              You can read at home or at the bookstore.
            </p>
          </div>
        </div>
        <div className="slide third-slide">
          <div className="slide-img-wrapper">
            <img src={book3} alt="" />
          </div>
          <div className="slide-info-wrapper">
            <h1 className="slide-info-title">Check Out The New Titles</h1>
            <p className="slide-info-desc">
              We send you the book you want at home.
            </p>
          </div>
        </div>
      </div>
      <i
        onClick={() => handleClick("right")}
        className="bi bi-chevron-double-right arrow-right"
      ></i>
    </div>
  );
};

import React, { useContext, useState } from "react";
import "./bookSlider.css";
import { Rating } from "./Rating";
import { Model } from "../model/Model";
import CartContext from "../../contextApi/CartContext";
export const BookSlider = ({ data }) => {
  const { addToCart } = useContext(CartContext);
  const [slideIndex, setSlideIndex] = useState(0);
  const [openModel, setOpenModel] = useState(false);
  const [bookData, setBookData] = useState(null);
  // Handel Model
  function handelModel(book) {
    setOpenModel(true);
    setBookData(book);
  }

  //Handel Click
  function handleClick(direction) {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : data.length - 2);
    } else {
      setSlideIndex(slideIndex < data.length - 2 ? slideIndex + 1 : 0);
    }
  }
  return (
    <div className="book-slider-container">
      <i
        onClick={() => handleClick("left")}
        className="bi bi-chevron-left book-slider-arrow-left"
      ></i>
      <div
        style={{ transform: `translateX(${slideIndex * -340}px)` }}
        className="book-slider-wrapper"
      >
        {data.map((item) => (
          <div key={item.id} className="book-slide-item">
            <img
              src={`/books/${item.image}`}
              alt={item.title}
              className="book-slide-item-img"
            />
            <h2 className="book-slide-item-title">{item.title}</h2>
            <Rating rating={item.rating} reviews={item.reviews} />
            <div className="book-slide-item-price">${item.price}</div>
            <div className="book-slider-icons-wrapper">
              <i
                onClick={() => handelModel(item)}
                className="bi bi-eye-fill"
              ></i>
              <i
                onClick={() => addToCart({ ...item, quantity: 1 })}
                className="bi bi-cart-plus"
              ></i>
            </div>
          </div>
        ))}
      </div>
      <i
        onClick={() => handleClick("right")}
        className="bi bi-chevron-right book-slider-arrow-right"
      ></i>
      {openModel && <Model bookData={bookData} setOpenModel={setOpenModel} />}
    </div>
  );
};

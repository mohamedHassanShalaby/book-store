import React, { useContext, useState } from "react";
import "./model.css";
import { Rating } from "../book-slider/Rating";
import { Link } from "react-router-dom";
import CartContext from "../../contextApi/CartContext";
export const Model = ({ bookData, setOpenModel }) => {
  const { addToCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);
  const { id, image, title, inStock, rating, reviews, author, price } =
    bookData;
  return (
    <div onClick={() => setOpenModel(false)} className="model-container">
      <div
        onClick={(event) => event.stopPropagation()}
        className="model-content"
      >
        <i
          onClick={() => setOpenModel(false)}
          className="bi bi-x-circle-fill model-icon"
        ></i>
        <div className="model-content-img">
          <img src={`/books/${image}`} alt="" />
        </div>
        <div className="model-content-info">
          <h5 className="model-content-info-title">{title}</h5>
          <div className="model-content-info-stock">
            <b>Status: </b> {inStock ? "in stock" : "not in stock"}
          </div>
          <Rating rating={rating} reviews={reviews} />
          <div className="model-content-info-author">
            <b>Author: </b> {author}
          </div>
          <div className="model-content-info-price">
            <b>Price: </b> ${price}
          </div>
          <div className="model-add-to-cart">
            <input
              type="number"
              min="1"
              max="100"
              className="model-add-to-cart-input"
              value={quantity}
              onChange={(e) => setQuantity(e.tareget.value)}
            />
            <button
              onClick={() => addToCart({ ...bookData, quantity: quantity })}
              className="model-add-to-cart-btn"
            >
              <i className="bi bi-cart-plus"></i>
              Add To Cart
            </button>
          </div>
          <Link to={`book/${id}`} className="model-content-info-link">
            See More Details
          </Link>
        </div>
      </div>
    </div>
  );
};

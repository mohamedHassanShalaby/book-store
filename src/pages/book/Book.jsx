import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { books } from "../../data/books";
import { Rating } from "../../components/book-slider/Rating";
import "./book.css";
import CartContext from "../../contextApi/CartContext";
export const Book = () => {
  const { addToCart } = useContext(CartContext);
  const { id } = useParams(); // take id from url
  const book = books.find((b) => b.id === +id); //method find ==> take object && parse(id) === +id
  const [quantity, setQuantity] = useState(1);
  return (
    <div className="book">
      <div className="book-content">
        <img src={`/books/${book.image}`} alt="" className="book-content-img" />
        <div className="book-content-info">
          <h1 className="book--title">{book.title}</h1>
          <div className="book-author">
            by <span>{book.author}</span> (Author)
          </div>
          <Rating rating={book.rating} reviews={book.reviews} />
          <div className="book-add-to-cart">
            <input
              type="number"
              min={"1"}
              max={"100"}
              className="book-add-to-cart-input"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
            <button
              onClick={() =>
                addToCart({
                  ...book,
                  quantity: quantity,
                })
              }
              className="book-add-to-cart-btn"
            >
              <i className="bi bi-cart-plus"></i>
              Add To Cart
            </button>
          </div>
        </div>
      </div>
      <p className="book-desc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic enim et
        laboriosam tempora natus explicabo voluptate? In sed sequi dolorem,
        eligendi aliquid voluptas tempore error deserunt. Dolore corrupti
        aliquam quaerat. Lorem ipsum dolor sit amet consectetur, adipisicing
        elit. Officiis suscipit exercitationem facere provident praesentium
        recusandae natus assumenda, minus quisquam repellendus fuga quod,
        tenetur ipsam voluptate, nisi itaque id totam. Asperiores.
      </p>
      <div className="book-icons">
        <div className="book-icon">
          <small>Print Length</small>
          <i className="bi bi-file-earmark-break"></i>
          <b>{book.printLength} Pages</b>
        </div>
        <div className="book-icon">
          <small>Language</small>
          <i className="bi bi-globe"></i>
          <b>{book.language}</b>
        </div>
        <div className="book-icon">
          <small>Publication date</small>
          <i className="bi bi-calendar3"></i>
          <b>{book.PublicationDate}</b>
        </div>
      </div>
    </div>
  );
};

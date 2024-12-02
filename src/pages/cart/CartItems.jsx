import React, { useContext } from "react";
import CartContext from "../../contextApi/CartContext";
export const CartItems = ({ addToCart, removeFromCart }) => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="cart-items">
      {cartItems.map((item) => (
        <div key={item.id} className="cart-item">
          <img src={`/books/${item.image}`} alt="" className="cart-item-img" />
          <div className="cart-item-info">
            <div>
              <div className="cart-item-book-title">
                <b>Title: </b> {item.title}
              </div>
              <div className="cart-item-author">
                <b>Author: </b> {item.author}
              </div>
            </div>
            <div>
              <div className="cart-item-quantity">
                <button
                  onClick={() =>
                    addToCart({ ...item, quantity: item.quantity + 1 })
                  }
                >
                  <i className="bi bi-plus-lg"></i>
                </button>
                <b>{item.quantity}</b>
                <button disabled={item.quantity <= 1}>
                  <i
                    onClick={() =>
                      addToCart({ ...item, quantity: item.quantity - 1 })
                    }
                    className="bi bi-dash-lg"
                  ></i>
                </button>
              </div>
              <div className="cart-item-price">
                <b>${(item.price * item.quantity).toFixed(2)}</b>
              </div>
              <i
                onClick={() => removeFromCart(item.id)}
                className="bi bi-trash-fill"
              ></i>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

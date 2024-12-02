import "./cart.css";
import { OrderSummary } from "./OrderSummary";
import { CartItems } from "./CartItems";
import CartContext from "../../contextApi/CartContext";
import { useContext } from "react";
export const Cart = () => {
  const { cartItems, addToCart, removeFromCart } = useContext(CartContext);

  const totalPrice = cartItems.reduce(
    (acc, cur) => acc + cur.price * cur.quantity,
    0
  ).toFixed(2);

  return (
    <div className="cart">
      <div className="cart-title">Your Shoping Cart</div>
      <div className="cart-wrapper">
        <CartItems removeFromCart={removeFromCart} addToCart={addToCart} />
        <OrderSummary totalPrice={totalPrice} />
      </div>
    </div>
  );
};

import React from "react";
export const OrderSummary = ({totalPrice}) => {
  return (
    <div className="cart-order-summary">
      <div className="order-title">ORDER SUMMARY</div>
      <div className="order-item">
        <span>Subtotal</span>
        <span>${totalPrice} </span>
      </div>
      <div className="order-item">
        <span>Shopping Cost</span>
        <span>0</span>
      </div>
      <div className="order-item">
        <span>Discount</span>
        <span>0</span>
      </div>
      <div className="order-item">
        <span>Total</span>
        <span>${totalPrice} </span>
      </div>
    </div>
  );
};

import React, { useContext } from "react";
import CartItem from "../CartItem";
import CartContext from "../../context/cart/CartContext";

const Cart = () => {
  const { line_items, subtotal, total_items} = useContext(CartContext);
  const {formatted_with_code: total_price} = subtotal


  if (total_items == 0) return <h4 align="center">Your cart is empty</h4>
  return (
    <div className="frame">
      <h2>Cart</h2>
      <h5>Products</h5>
      <h5 align="right">Amount</h5>
      {line_items.map((item) => {
        const {
          name,
          quantity,
          line_total: { formatted_with_code },
          id,
        } = item;
        return <CartItem name={name} id={id} quantity={quantity} line_total={formatted_with_code} />;
      })}
      <hr></hr>
      <div align="right">
        <p>Sub total: <strong>{subtotal.formatted_with_symbol} </strong></p>
        <hr className="lineCart"/>
        <p>Shipping fee: <strong>{subtotal.formatted_with_symbol} </strong></p>
        <hr className="lineCart"/>
        <p>Total: <strong>{subtotal.formatted_with_symbol} </strong></p>
      </div>
    </div>
  );
};

export default Cart;

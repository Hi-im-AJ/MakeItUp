import React, { useContext } from "react";
import CartItem from "../CartItem";
import CartContext from "../../context/cart/CartContext";

const Cart = () => {
  const { line_items } = useContext(CartContext);

  return (
    <div className="frame">
      <h2>Cart</h2>
      {line_items.map((item) => {
        const {
          name,
          quantity,
          line_total: { formatted_with_code },
          id,
        } = item;
        return <CartItem name={name} id={id} quantity={quantity} line_total={formatted_with_code} />;
      })}
    </div>
  );
};

export default Cart;

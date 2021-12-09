import React, { useContext } from "react";
import CartContext from "../context/cart/CartContext";
import commerce from "../lib/commerce";

const CartItem = ({ name, quantity, line_total, id }) => {
  const { setCart } = useContext(CartContext);
  const removeFromCart = () => commerce.cart.remove(id).then(({ cart }) => setCart(cart));
  return (
    <div key={id}>
      <p>{name}</p>
      <p>{quantity}</p>
      <p>{line_total}</p>
      <button onClick={removeFromCart}>-</button>
    </div>
  );
};

export default CartItem;

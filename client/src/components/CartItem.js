import React, { useContext } from "react";
import CartContext from "../context/cart/CartContext";
import commerce from "../lib/commerce";

const CartItem = ({ name, quantity, line_total, id }) => {
  const { setCart } = useContext(CartContext);

  const incrementByOne = () => commerce.cart
    .update(id, {
      quantity:quantity + 1
    })
    .then(({ cart }) => setCart(cart));

  const decrementByOne = () => commerce.cart
      .update(id, {
          quantity:quantity - 1
      })
      .then(({ cart }) => setCart(cart));


  return (
    <div key={id}>
      <p>{name}</p>
      <p>{quantity}</p>
      <p>{line_total}</p>
      <button onClick={incrementByOne}>+</button>
      <button onClick={decrementByOne}>-</button>
    </div>
  );
};

export default CartItem;

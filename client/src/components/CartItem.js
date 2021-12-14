import React, { useContext } from "react";
import CartContext from "../context/cart/CartContext";
import commerce from "../lib/commerce";



const CartItem = ({ name, quantity, line_total, id, line_items}) => {
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
      <hr/>
      <p>{name}</p>
      <p>{quantity}</p>
      <button className="btn" onClick={incrementByOne}>+</button>
      <button className="btn" onClick={decrementByOne}>-</button>
      <p>{line_total}</p>
    </div>
  );
};

export default CartItem;

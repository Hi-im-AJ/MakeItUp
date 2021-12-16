import React, { useContext } from "react";
import CartContext from "../context/cart/CartContext";
import commerce from "../lib/commerce";

const CartItem = ({ img, name, quantity, line_total, id }) => {
  const { setCart } = useContext(CartContext);

  const incrementByOne = () =>
    commerce.cart
      .update(id, {
        quantity: quantity + 1,
      })
      .then(({ cart }) => setCart(cart));

  const decrementByOne = () =>
    commerce.cart
      .update(id, {
        quantity: quantity - 1,
      })
      .then(({ cart }) => setCart(cart));

  return (
    <div className="CartItem" key={id}>
      <div className="desc">
        <img src={img.url} alt={name} />
        <p id="cartItemName">{name}</p>
      </div>
      <div className="quantity">
        <button onClick={incrementByOne}>+</button>
        <p>{quantity}</p>
        <button onClick={decrementByOne}>-</button>
      </div>
      <p>{line_total}</p>
    </div>
  );
};

export default CartItem;

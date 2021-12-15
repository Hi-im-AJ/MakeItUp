import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CartItem from "../CartItem";
import CartContext from "../../context/cart/CartContext";

const Cart = () => {
  const { line_items, subtotal } = useContext(CartContext);
  const { formatted_with_code: total_price } = subtotal;
  return (
    <div className="frame" id="cartPage">
      <h2>Cart</h2>
      <div id="cartHeader">
        <h6>Products</h6>
        <h6>Amount</h6>
      </div>
      <hr id="firstHr" />
      <div id="productCartContainer">
        {line_items.map((item) => {
          const {
            name,
            quantity,
            line_total: { formatted_with_code },
            id,
            image,
          } = item;
          return (
            <>
              <CartItem img={image} name={name} id={id} quantity={quantity} line_total={formatted_with_code} />
              <hr />
            </>
          );
        })}
      </div>
      <ul>
        <li>
          <p>Subtotal</p>
          <p>{total_price /* minus shipping fee */}</p>
        </li>
        <li>
          <p>Shipping fee</p>
          <p>UNDEFINED</p>
        </li>
        <li>
          <p>Total</p>
          <p>{total_price}</p>
        </li>
      </ul>
      <Link to="/checkout">Checkout</Link>
    </div>
  );
};

export default Cart;

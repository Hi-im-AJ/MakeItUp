import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CartItem from "../CartItem";
import CartContext from "../../context/cart/CartContext";

const Cart = () => {
  const { line_items, subtotal, total_items } = useContext(CartContext);

  if (total_items === 0) return <h4 align="center">Your cart is empty</h4>;
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
      <div className="totalsContainer" align="right">
        <p>
          Sub total: <strong>{subtotal.formatted_with_symbol} </strong>
        </p>
        <hr className="lineCart" />
        <p>
          Shipping fee: <strong>{subtotal.formatted_with_symbol} </strong>
        </p>
        <hr className="lineCart" />
        <p>
          Total: <strong>{subtotal.formatted_with_symbol} </strong>
        </p>
        <Link id="checkoutBtn" to="/checkout">
          Checkout
        </Link>
      </div>
    </div>
  );
};

export default Cart;

import React from "react";
import {useCartState} from "../../context/cart/cart";
import CartItem from "../CartItem";
const Cart = () => {

  const {line_items} = useCartState()

  return (
      <div>
        <h2>Cart</h2>
          {line_items.map(item => <CartItem name={item.name} quantity={item.quantity} line_total={item.line_total.formatted_with_code}/>)}
      </div>
  )
};

export default Cart;

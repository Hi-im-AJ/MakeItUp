import React, { useReducer } from "react";
import CartContext from "./CartContext";
import CartReducer from "./CartReducer";
import { SET_CART } from "../types";

const CartState = (props) => {
  const initialState = {
    total_items: 0,
    total_unique_items: 0,
    line_items: [],
  };
  const [state, dispatch] = useReducer(CartReducer, initialState);

  const setCart = (payload) => {
    dispatch({ type: SET_CART, payload });
  };

  return (
    <CartContext.Provider
      value={{
        total_items: state.total_items,
        total_unique_items: state.total_unique_items,
        line_items: state.line_items,
        setCart,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartState;

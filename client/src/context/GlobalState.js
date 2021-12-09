import React, {useEffect, useReducer} from "react";
import GlobalContext from "./GlobalContext";
import GlobalReducer from "./GlobalReducer";
import {SET_CART, SET_SEARCH_INPUT} from "./types";
import commerce from "../lib/commerce";

const GlobalState = (props) => {
  const initialState = {
    searchInput: "",
    cart: {
      totalItems: 0,
      totalUniqueItems: 0,
      lineItems: [],
    },
  };
  const [state, dispatch] = useReducer(GlobalReducer, initialState);

  const setSearchInput = async (input) => {
    try {
      dispatch({ type: SET_SEARCH_INPUT, payload: input });
    } catch (error) {}
  };
  useEffect(() => {getCart()}, [] )

  const setCart = (payload) => dispatch({type: SET_CART, payload})
  const getCart = async () => {
    try {
      const cart = await commerce.cart.retrieve();
      setCart(cart)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <GlobalContext.Provider
      value={{
        searchInput: state.searchInput,
        setSearchInput,
        cart: state.cart,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;

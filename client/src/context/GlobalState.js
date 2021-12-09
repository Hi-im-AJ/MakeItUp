import React, { useReducer } from "react";
import GlobalContext from "./GlobalContext";
import GlobalReducer from "./GlobalReducer";
import { SET_SEARCH_INPUT } from "./types";

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

import React, { useReducer } from "react";
import ProductContext from "./ProductContext";
import ProductReducer from "./ProductReducer";
import { SET_SEARCH_INPUT } from "../types";

const ProductState = (props) => {
  const initialState = {
    search_input: "",
  };
  const [state, dispatch] = useReducer(ProductReducer, initialState);

  const setSearchInput = async (input) => {
    try {
      dispatch({ type: SET_SEARCH_INPUT, payload: input });
    } catch (error) {}
  };

  return (
    <ProductContext.Provider
      value={{
        search_input: state.search_input,
        setSearchInput,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductState;

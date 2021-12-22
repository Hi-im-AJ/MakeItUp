import React, { useReducer } from "react";
import SearchContext from "./SearchContext";
import SearchReducer from "./SearchReducer";
import { SET_SEARCH_INPUT } from "../types";

export default (props) => {
  const initialState = {
    searchInput: "",
  };
  const [state, dispatch] = useReducer(SearchReducer, initialState);

  const setSearchInput = (input) => {
    dispatch({ type: SET_SEARCH_INPUT, payload: input });
  };

  return (
    <SearchContext.Provider
      value={{
        searchInput: state.searchInput,
        setSearchInput,
      }}
    >
      {props.children}
    </SearchContext.Provider>
  );
};

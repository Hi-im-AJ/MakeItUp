import React, { useReducer } from "react";
import SearchContext from "./SearchContext";
import SearchReducer from "./SearchReducer";
import { SET_SEARCH_INPUT } from "../types";

const SearchState = (props) => {
  const initialState = {
    searchInput: "",
  };
  const [state, dispatch] = useReducer(SearchReducer, initialState);

  const setSearchInput = async (input) => {
    try {
      dispatch({ type: SET_SEARCH_INPUT, payload: input });
    } catch (error) {}
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

export default SearchState;

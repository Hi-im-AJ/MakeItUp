import React, { useContext } from "react";
import ProductContext from "../context/product/ProductContext";

const Search = () => {
  const { setSearchInput } = useContext(ProductContext);

  return (
    <div id="searchContainer">
      <input id="searchInput" name="searchInput" onChange={(e) => setSearchInput(e.target.value)} type="text" />
    </div>
  );
};

export default Search;

import React, { useContext } from "react";
import ProductContext from "../context/product/ProductContext";

const Search = () => {
  const productContext = useContext(ProductContext);
  const { setSearchInput } = productContext;

  const onChange = (e) => setSearchInput(e.target.value);
  console.log("qwe");
  return (
    <div>
      <input onChange={(e) => onChange(e)} id="searchInput" name="searchInput" type="text" placeholder="Search..." />
      <button id="submitButton">Search</button>
    </div>
  );
};

export default Search;

import React, { useContext } from "react";
import SearchContext from "../context/search/SearchContext";

const Search = () => {
  const { setSearchInput } = useContext(SearchContext);

  return (
    <div id="searchContainer">
      <input id="searchInput" name="searchInput" onChange={(e) => setSearchInput(e.target.value)} type="text" />
    </div>
  );
};

export default Search;

import React, { useContext } from "react";
import GlobalContext from "../context/GlobalContext";

const Search = () => {
  const { setSearchInput } = useContext(GlobalContext);

  return (
    <div id="searchContainer">
      <input id="searchInput" name="searchInput" onChange={(e) => setSearchInput(e.target.value)} type="text" />
    </div>
  );
};

export default Search;

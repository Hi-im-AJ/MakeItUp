import { useContext } from "react";
import SearchContext from "../context/search/SearchContext";

export default function () {
  const { setSearchInput } = useContext(SearchContext);

  return (
    <div id="searchContainer">
      <input id="searchInput" name="searchInput" onChange={(e) => setSearchInput(e.target.value)} type="text" />
    </div>
  );
}

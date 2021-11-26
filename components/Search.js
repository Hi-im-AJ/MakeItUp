import React, {useState} from "react";
const Search = () => {
  const [searchInput, setSearchInput] = useState("")
    const handleSearch = () => {

    };
  return (
    <div>
        <input type="text" onChange={(e) => setSearchInput(e.target.value)} name="search" id="searchInput" />
        <button onClick={handleSearch} id="submitButton">Search</button>
    </div>
  );
};

export default Search;

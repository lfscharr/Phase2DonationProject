import React from "react";

function Search({search, onSearch}) {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Organizations:</label>
      <input
        type="text"
        id="search"
        placeholder="Type to search..."
        value ={search}
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
}

export default Search;
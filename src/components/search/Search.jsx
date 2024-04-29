import React, { useState } from "react";
import "./search.modules.css";

function Search({ transactions, onFilter }) {
  const [searchTerm, setSearchTerm] = useState("");
  const handleInputChange = (event) => {
    if (typeof event.target.value === "string") {
      setSearchTerm(event.target.value.toLowerCase());
    } else {
    }
  };
  return (
    <div>
      <input
        className="search"
        type="text"
        placeholder="Search your Recent Transaction"
        value={searchTerm}
        onChange={handleInputChange}
      />
    </div>
  );
}

export default Search;

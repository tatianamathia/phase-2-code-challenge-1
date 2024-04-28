import React, {useState} from "react";
import "./search.modules.css";

function Search() {
    const [searchTerm, setSearchTerm] = useState("");
    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
        
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

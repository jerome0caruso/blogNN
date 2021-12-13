import React from "react";
import "./component.css";
const SearchBox = ({ inputChangeHandler }) => {
  return (
    <div className="search-container">
      <input
        className="search-input"
        type="search"
        placeholder="search robots"
        onChange={inputChangeHandler}
      />
    </div>
  );
};

export default SearchBox;

import React from "react";
import "./component.css";
const SearchBox = ({ inputChangeHandler, searchClass, pl, handleKeypress, value }) => {

  return (
    <div>
      <input
        onKeyPress={handleKeypress}
        className={searchClass}
        type="search"
        placeholder={pl}
        onChange={inputChangeHandler}
        value={value}
      />
    </div>
  );
};

export default SearchBox;

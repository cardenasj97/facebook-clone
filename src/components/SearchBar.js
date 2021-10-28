import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const SearchBar = () => (
    <div className="search-bar__container">
        <FontAwesomeIcon icon={faSearch} className="search-icon" />
        <input type="text" name="" className="search-bar" placeholder="Search Facebook" />
    </div>
);

export default SearchBar;
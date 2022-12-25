import React from "react";
import './Sort.css';

const Sort = () => {
    const sortOptions = ["Featured", "Best Selling", "Alphabetically, A-Z", "Alphabetically, Z-A", "Price, low to high", "Price, high to low", "Date, new to old", "Date, old to new"];
    const sortOptionsList = sortOptions.map((option, index) => <option key={index}>{option}</option>);
    return (
        <div className="collection-sort">
        <label>Sort by:</label>
        <select>{sortOptionsList}</select>
        </div>
    );
};

export default Sort;
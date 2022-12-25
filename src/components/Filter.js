import React from "react";
import './Sort/Sort.css';

const Filter = () => {
    const filterOptions = ["All Jackets", "2016", "jacket", "jackets", "layers", "Obermeyer", "Roxy", "womens"];
    const filterOptionsList = filterOptions.map((option, index) => <option key={index}>{option}</option>);
    return (
        <div className="collection-sort">
        <label>Filter by:</label>
        <select>{filterOptionsList}</select>
        </div>
    );
};

export default Filter;
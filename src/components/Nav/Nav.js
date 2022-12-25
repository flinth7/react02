import React from "react";
import './Nav.css'
import Filter from "../Filter";
import Sort from "../Sort/Sort";

const Nav = () => {
    return (
    <nav className="product-filter">
      <h1>Jackets</h1>

      <div className="sort">
        <Filter />
        <Sort />
      </div>

    </nav>
    );
};

export default Nav;
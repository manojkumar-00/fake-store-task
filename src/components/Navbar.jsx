/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import "./Navbar.css"; // Import the CSS file

const Navbar = ({ category ,setCategoryProp}) => {
  console.log(category);

  function categoryHandler(event){
    setCategoryProp(event.target.innerText);
  }

  return (
    <nav className="navbar">
      <button className="add-product-link">Add New Product</button>
      <hr className="separator" />
      <h1 className="category-header">Category Filter</h1>
      <ul className="category-list">
        {category.length > 0 &&
          category.map((elem, idx) => {
            return (
              <li onClick={categoryHandler} key={idx} className="category-item">
                <span className="category-indicator"></span>
                  {elem}
              </li>
            );
          })}
      </ul>
    </nav>
  );
};

export default Navbar;

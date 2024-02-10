import React from "react";
import Data from "../products.json";

const ShopCategory = ({
  filterItem,
  setItem,
  menuItems,
  setProducts,
  selectedCategory,
}) => {
  return (
    // empty fragments
    <>
      <div className="widget-header">
        <h5 className=" ms-2">All Categories</h5>
      </div>
      <div>
        <button
          onClick={() => setProducts(Data)}
          className={`m-2 ${selectedCategory === "All" ? "bg-success" : ""}`}
        >
          All
        </button>
        {menuItems.map((Val, id) => {
          return (
            <button
              className={`m-2 ${selectedCategory === Val ? "bg-info" : ""}`}
              key={id}
              onClick={() => filterItem(Val)}
            >
              {Val}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default ShopCategory;

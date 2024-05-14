// import React from 'react';
import { useContext } from "react";
import "./DisplaySort.css";
import { FaChevronDown } from "react-icons/fa";
import { ItemContent } from "../DataFolder/Context/Context";
import Item from "../item/item.jsx";
import { Link } from "react-router-dom";

const DisplaySortGrocery = () => {
  // const { GroceryData } = useContext(ItemContent);
  const { GroceryData, selectedCategory } = useContext(ItemContent);

  return (
    <div className="DisplaySort-main-section ">
      <div className="grocery-sort-section ">
        <h1 className="sort-title">
          {" "}
          {selectedCategory
            ? `Buy ${selectedCategory} Online`
            : "Buy All Category Items Online"}
        </h1>
        <h1 className="sort-title"></h1>

        <div className="sort-btn-section">
          <p>Sort By</p>

          <div className="sort-relevance-section">
            <li>Relevance </li>
            <FaChevronDown style={{ marginRight: "5px", fontSize: "14px" }} />
          </div>
        </div>
      </div>
      <div className="Display-grocery-conatiner">
        {GroceryData.map((item, index) => {
          return (
            <Link to={`/Product/${item.id}`}>
              <Item
                key={index}
                Image={item.Image}
                Timer={item.Timer}
                Title={item.Title}
                Weight={item.Weight}
                NewAmount={item.NewAmount}
                OldAmount={item.OldAmount}
                offer={item.offer}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default DisplaySortGrocery;

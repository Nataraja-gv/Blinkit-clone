import React, { useContext } from "react";
import "./DisplaySort.css";
import { FaChevronDown } from "react-icons/fa";
import { ItemContent } from "../DataFolder/Context/Context";
import Item from "../item/item.jsx";
import { Link } from "react-router-dom";
import Item2 from "../item2/Item2.jsx";

const DisplaySortGrocery = () => {
  const { GroceryInfo, selectedCategory } = useContext(ItemContent);

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
      <div>
        <div className="Display-grocery-conatiner">
          {GroceryInfo.map((groceryItem) =>
            groceryItem.info.map((item, index) => (
              <Link to={`/Product/${item.id}`} key={index}>
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
            ))
          )}
        </div>

        {/* //mobile */}

        <div className="mobile-Display-grocery-conatiner">
          {GroceryInfo.map((groceryItem) =>
            groceryItem.info.map((item, index) => (
              <Link to={`/Product/${item.id}`} key={index}>
                <Item2
                  key={index}
                  Image={item.Image}
                  Timer={item.Timer}
                  Title={item.Title}
                  Weight={item.Weight}
                  NewAmount={item.NewAmount}
                  OldAmount={item.OldAmount}
                  offer={item.offer}
                  option={item.option}
                />
              </Link>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default DisplaySortGrocery;

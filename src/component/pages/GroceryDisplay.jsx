import "./style/GroceryDisplay.css";
import { Link } from "react-router-dom";
import { typeCategory } from "../pages/typescategory";

const GroceryDisplay = () => {
  return (
    <div className="groceryDisplay-main-container">
      {typeCategory.map((item, index) => (
          <div key={index}>
            <Link to={item.id === 3 ? `/grocery` : `/`}>
              <img src={item.Image} alt={item.category} className="grocery-images-display" />
            </Link>
          </div>
      ))}
    </div>
  );
};

 {/* ? ( */}
 {/* ) : (
          <div key={index}>
            <img src={item.Image} alt={item.category} className="grocery-images-display" />
          </div>
        ) */}

export default GroceryDisplay;

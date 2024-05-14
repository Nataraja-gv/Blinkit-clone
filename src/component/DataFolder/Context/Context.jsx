import { createContext, useEffect, useMemo, useState } from "react";
import { Cands } from "../Cands.jsx";
import { Daily_prodcts_details } from "../Daily.jsx";
import { Rolling } from "../Rolling.jsx";
import { SnacksItemsDetails } from "../Snacks.jsx";
import { ColdDriksDetails } from "../Cold.jsx";
import { GroceryData } from "../../GroceryData/GroceryData.jsx";
import { vegMenuDetails } from "../../MenuItemDataFolder/VegMenu.jsx";

export const ItemContent = createContext();
const ContextProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState("vegetables");
  const [filterSelectedCategory, setFilterSelectedCategory] =
    useState(GroceryData);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    if (selectedCategory) {
      setFilterSelectedCategory(
        GroceryData.filter((item) => item.category === selectedCategory)
      );
    } else {
      setFilterSelectedCategory(GroceryData);
    }
  }, [selectedCategory]);


  //addtocart

  const addToCart = (item) => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);
  
    if (existingItem) {
       setCart(
        cart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
       
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };



//remove cart


const removeFromCart = (item) => {
  const existingItem = cart.find((cartItem) => cartItem.id === item.id);
  
  if (existingItem) {
    if (existingItem.quantity > 1) {
      setCart(
        cart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
      );
    } else {
      setCart(cart.filter((cartItem) => cartItem.id !== item.id));
    }
  }
};


  //total amount

  const calculateTotals = useMemo(() => {
    let total = 0;
    let discount = 0;
    let mrp = 0;
     
  
    cart.forEach((cartItem) => {
      total += (cartItem.NewAmount) * cartItem.quantity;
      discount += (cartItem.OldAmount-cartItem.NewAmount) * cartItem.quantity;
      mrp += cartItem.OldAmount * cartItem.quantity;
     
    });
  
    return { total, discount, mrp };
  }, [cart]);



  //quantity item


  const getCartLength = (cart) => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };


  const itemValue = {
    vegMenuDetails,
    GroceryData,
    Cands,
    Daily_prodcts_details,
    Rolling,
    SnacksItemsDetails,
    ColdDriksDetails,
    selectedCategory,
    setSelectedCategory,
    GroceryData: filterSelectedCategory,
    addToCart,
    cart,
    total: calculateTotals.total,
    discount: calculateTotals.discount,
    mrp: calculateTotals.mrp,
    removeFromCart,
    getCartLength
     
  };
  return (
    <ItemContent.Provider value={itemValue}>{children}</ItemContent.Provider>
  );
};

export default ContextProvider;

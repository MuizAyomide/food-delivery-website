import { createContext, useState } from "react";
import { food_list } from "../../assets/assets";

export const StoreContext = createContext(null);

const StoreCongtextProvider = (props) => {

const [cartItems,setCartItems] = useState({});

const addToCart = (itemId) => {
  if (!cartItems[itemId]){
    setCartItems((prev)=>({...prev,[itemId]:1}))
  }
  else {
    setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
  }
}

const removeFormCart = (itemId) => {
  setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
}

  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFormCart
  };
  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreCongtextProvider;

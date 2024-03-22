import { createContext } from "react";
import { food_list } from "../../assets/assets";

export const StoreContext = createContext(null);

const StoreCongtextProvider = (props) => {

    
  const contextValue = {
    food_list
  }
  return (
    <StoreCongtext.Provider value={contextValue}>
      {props.children}
    </StoreCongtext.Provider>
  );
};

export default StoreCongtextProvider;

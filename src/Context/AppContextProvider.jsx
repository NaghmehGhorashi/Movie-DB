import { createContext, useState,useContext} from "react";

export const AppContext = createContext({});

export const useAppContext = () => {
  return useContext(AppContext);               //custom hook
};


 function AppContextProvider({ children }) {
  const [CartItems, setCartItems] = useState([]);

  console.log(CartItems)

  function IncreaseQty(id) {
    console.log('Increasing qty for movie with id:', id);
   setCartItems((currentItems) => {  
    let IsProductExist = currentItems.find(item => item.id == id); //First, we’ll check with find to see if the item with the specified ID exists in our cart. Then, we’ll either add one more to it or set its initial value to one.

    if (!IsProductExist) {
    return [...currentItems, { id, qty: 1 }];       //there's nt already product so Add to the cart
    } else {
   return currentItems.map((item) => {  //there is product so lets find the product and increase the qty
        if (item.id == id) {
          return { ...item, qty: item.qty + 1 };
        } else {
          return item;
        }
      });
    }
  });
}

function DecreaseQty(id) {
  setCartItems((currentItems) => {
    let isProductExist = currentItems.find(item => item.id == id);

    if (!isProductExist) {
      return currentItems;
    }

    if (isProductExist.qty === 1) {
      return currentItems.filter(item => item.id !== id); 
    }

    return currentItems.map((item) => 
      item.id === id ? { ...item, qty: item.qty - 1 } : item
    ); 
  });
}
  
function getProductQty(id) {
  const Movie = CartItems.find(item => item.id === id);
  return Movie ? Movie.qty : 0;
}
function cartqty() {
  return CartItems.reduce((total, item) => total + item.qty, 0);
}
  
const removeProductFromCart = (id) => {
  setCartItems((currentItems) => currentItems.filter((item) => item.id !== id));
};


  return (
    <AppContext.Provider value={{ CartItems,getProductQty,DecreaseQty,IncreaseQty,removeProductFromCart,cartqty}}>
  
      {children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;    


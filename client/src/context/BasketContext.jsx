import { createContext, useEffect, useState } from "react";

export const BasketContext = createContext();

const BasketProvider = ({ children }) => {
  const [basket, setBasket] = useState(localStorage.getItem('basket')?JSON.parse(localStorage.getItem('basket')):[])
  const addToBasket = (service)=>{
    setBasket([...basket,service])
  }
  useEffect(() => {
    localStorage.setItem('basket',JSON.stringify(basket))
  }, [basket])
  
  const data = {
    addToBasket
  };
  return (
    <BasketContext.Provider value={data}>
        {children}
    </BasketContext.Provider>
  );
};

export default BasketProvider;

import React, { useEffect, useState } from "react";

const CartContext = React.createContext();
const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(0);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await fetch(`${url}/bots`);
    const result = await response.json();
    setData(result);
  };

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };

import React, { useEffect, useState } from "react";
const url = "http://localhost:8000";
const CartContext = React.createContext();
const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(0);
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    setIsLoading(true);
    const response = await fetch(`${url}/products`);
    const result = await response.json();
    setProducts(result);
    setIsLoading(false);
  };

  return (
    <CartContext.Provider
      value={{ cart, setCart, products, setProducts, isLoading }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider, url };

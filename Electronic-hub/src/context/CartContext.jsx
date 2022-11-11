import React, { useEffect, useState } from "react";
const url = "http://localhost:8000";
const CartContext = React.createContext();
const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(0);
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [orders, setOrders] = useState([]);
  const [buyers, setBuyers] = useState([]);
  useEffect(() => {
    getData();
    getOrders();
    getBuyers();
  }, []);

  const getData = async () => {
    setIsLoading(true);
    const response = await fetch(`${url}/products`);
    const result = await response.json();
    setProducts(result);
    setIsLoading(false);
  };

  const getOrders = async () => {
    setIsLoading(true);
    const response = await fetch(`${url}/orders`);
    const result = await response.json();
    setOrders(result);
    setIsLoading(false);
  };
  const getBuyers = async () => {
    setIsLoading(true);
    const response = await fetch(`${url}/buyers`);
    const result = await response.json();
    setBuyers(result);
    setIsLoading(false);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        products,
        setProducts,
        isLoading,
        orders,
        buyers,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider, url };

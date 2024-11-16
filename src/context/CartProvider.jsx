import { useState } from "react";
import { cartContext } from "./cartContext";

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item) => {
    setCart([...cart, item]);
  };

  const clearCart = () => {
    setCart([]);
  };

  const getQuantity = () => {
    return cart.reduce((acc, item) => acc + item.quantity, 0);
  };

  console.log(cart);

  return (
    <cartContext.Provider value={{ cart, addItem, clearCart, getQuantity }}>
      {children}
    </cartContext.Provider>
  );
};

export default CartProvider;

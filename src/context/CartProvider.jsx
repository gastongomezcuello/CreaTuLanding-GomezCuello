import { useState } from "react";
import { cartContext } from "./cartContext";

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item) => {
    const itemIndex = cart.findIndex((cartItem) => cartItem.id === item.id);

    if (itemIndex === -1) {
      setCart([...cart, item]);
    } else {
      const newCart = [...cart];
      newCart[itemIndex].quantity += item.quantity;
      setCart(newCart);
    }
  };

  const removeItem = (itemId) => {
    const newCart = cart.filter((item) => item.id !== itemId);
    setCart(newCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  const getQuantity = () => {
    return cart.reduce((acc, item) => acc + item.quantity, 0);
  };

  const getTotal = () => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  return (
    <cartContext.Provider
      value={{ cart, addItem, removeItem, clearCart, getQuantity, getTotal }}
    >
      {children}
    </cartContext.Provider>
  );
};

export default CartProvider;

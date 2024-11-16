import { useState } from "react";

import { useCart } from "../context/cartContext";

const ItemCount = ({ item }) => {
  const [count, setCount] = useState(1);
  const { addItem } = useCart();

  const handleAdd = () => setCount(count + 1);
  const handleSubtract = () => {
    setCount((prevCount) => {
      const newCount = prevCount - 1;
      return newCount < 1 ? 1 : newCount;
    });
  };
  const handleAddToCart = () => {
    addItem({ ...item, quantity: count });
  };

  return (
    <div>
      <button onClick={handleSubtract}>-</button>
      <span>{count}</span>
      <button onClick={handleAdd}>+</button>
      <button onClick={handleAddToCart}>add to cart</button>
    </div>
  );
};

export default ItemCount;

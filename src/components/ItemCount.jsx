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

  const totalPrice = item.price * count;

  return (
    <div>
      <button onClick={handleSubtract}>-</button>
      <span className="counter">{count}</span>
      <button onClick={handleAdd}>+</button>
      <div>
        <b className="big-price">${totalPrice}</b>
      </div>
      <button onClick={handleAddToCart}>Agregar al carrito</button>
    </div>
  );
};

export default ItemCount;

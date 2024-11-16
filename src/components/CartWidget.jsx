import { useCart } from "../context/cartContext";

import cartImg from "../assets/carrito.png";

const CartWidget = () => {
  const { getQuantity } = useCart();

  return (
    <>
      <section className="cart-widget">
        <div></div>

        <img src={cartImg} alt="cart"></img>
        <span>{getQuantity()} </span>
      </section>
    </>
  );
};

export default CartWidget;

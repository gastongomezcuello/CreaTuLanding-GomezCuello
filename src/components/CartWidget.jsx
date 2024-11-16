import { useCart } from "../context/cartContext";

import cartImg from "../assets/carrito.png";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { getQuantity } = useCart();

  return (
    <>
      <Link to="/cart">
        <section className="cart-widget">
          <img src={cartImg} alt="cart"></img>
          <span>{getQuantity()} </span>
        </section>
      </Link>
    </>
  );
};

export default CartWidget;

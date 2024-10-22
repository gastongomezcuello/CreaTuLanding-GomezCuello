import cartImg from "../assets/carrito.png";

const CartWidget = () => {
  return (
    <>
      <section className="cart-widget">
        <div></div>

        <img src={cartImg} alt="cart"></img>
        <span>0 </span>
      </section>
    </>
  );
};

export default CartWidget;

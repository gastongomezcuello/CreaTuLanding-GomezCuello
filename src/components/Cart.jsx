import { useCart } from "../context/cartContext";
import CartItem from "./CartItem";
import CheckoutForm from "./CheckoutForm";

const Cart = () => {
  const { cart, getTotal, removeItem, clearCart } = useCart();

  const handleClearClick = () => {
    clearCart();
  };

  const handleDeleteClick = (id) => {
    removeItem(id);
  };

  return (
    <section className="grid-container">
      <div>
        <h1>Tu carrito de compra</h1>
        <div>
          {cart.length ? (
            cart.map((el) => (
              <CartItem key={el.id} item={el} handleDeleteClick={handleDeleteClick} />
            ))
          ) : (
            <p>El carrito está vacío</p>
          )}
        </div>
      </div>
      <div>
        <h2>Tu compra: ${getTotal()}</h2>
        {cart.length ? (
          <>
            <button onClick={handleClearClick}>Vaciar carrito</button>
            <h4>Completa tus datos para finalizar la compra</h4>
            <CheckoutForm cart={cart} getTotal={getTotal} clearCart={clearCart} />
          </>
        ) : (
          <p>Volvé a mirar nuestros productos</p>
        )}
      </div>
    </section>
  );
};

export default Cart;

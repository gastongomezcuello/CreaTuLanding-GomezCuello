import { useCart } from "../context/cartContext";
import { addOrder } from "../firebase/db";
import { serverTimestamp } from "firebase/firestore";

const Cart = () => {
  const { cart, getTotal, removeItem, clearCart } = useCart();
  const handleClearClick = () => {
    clearCart()
  }
  const handleDeleteClick = (id) => {
    removeItem(id)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const [name, email, phone] = form.elements;

    const order = {
      buyer: {
        name: name.value,
        email: email.value,
        phone: phone.value,
      },
      items: cart,
      date: serverTimestamp(),
      total: getTotal(),
    };

    addOrder(order);
  };
  
  
  return (
    <section className="grid-container">
      <div className="cart">
        <h1>Tu carrito de compra</h1>
        <div>
          {cart.length ? (
            cart.map((el) => (
              <div key={el.id} className="cart-item">
                <h3>{el.title}</h3>
                <p>Cantidad: {el.quantity}</p>
                <p>Precio: ${el.price}</p>
                <p>Subtotal: ${el.quantity * el.price}</p>
                <button onClick={() => handleDeleteClick(el.id)}>Quitar del carrito</button>
              </div>
            ))
          ) : (
            <p>El carrito está vacío</p>
          )}
        </div>
      </div>
      <div className="finish">
        <h2>Tu compra: ${getTotal()} </h2>
        
        {cart.length ? (
          <>
            <button onClick={handleClearClick}>Vaciar carrito</button>
            <h4>Completa tus datos para finalizar la compra</h4>
            <form onSubmit={handleSubmit} className="grid-container">
              <label htmlFor="name">Nombre Completo</label>
              <input type="text" placeholder="Carlos Navarro" id="name" required />
              <label htmlFor="email">Email</label>
              <input type="email" placeholder="carlosn@gmail.com" id="email" required />
              <label htmlFor="phoneNumber">Número de teléfono</label>          
              <input type="text" placeholder="3514444444" id="phoneNumber" required />
              <button type="submit">Confirmar compra</button>
            </form>
          </>) : (<p>Volvé a mirar nuestros productos</p>) }
        
      </div>
    </section>
  );
};

export default Cart;

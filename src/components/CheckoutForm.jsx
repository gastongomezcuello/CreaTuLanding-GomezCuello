import { serverTimestamp } from "firebase/firestore";
import { addOrder } from "../firebase/db";
import { useNavigate } from "react-router-dom";

const CheckoutForm = ({ cart, getTotal, clearCart }) => {
  const navigate = useNavigate();  

  const handleSubmit = async (e) => {
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

    const orderId = await addOrder(order);
    if (orderId) {
      clearCart();
      navigate(`/order-success/${orderId}`);
    } else {
      console.error("Error al procesar la orden.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="grid-container">
      <label htmlFor="name">Nombre Completo</label>
      <input type="text" placeholder="Carlos Navarro" id="name" required />
      <label htmlFor="email">Email</label>
      <input type="email" placeholder="carlosn@gmail.com" id="email" required />
      <label htmlFor="phoneNumber">Número de teléfono</label>
      <input type="text" placeholder="3514444444" id="phoneNumber" required />
      <button type="submit">Confirmar compra</button>
    </form>
  );
};

export default CheckoutForm;

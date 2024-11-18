import { serverTimestamp } from "firebase/firestore";
import { addOrder } from "../firebase/db";

const CheckoutForm = ({ cart, getTotal }) => {
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

import { useCart } from "../context/cartContext";
import { addOrder } from "../firebase/db";
import { serverTimestamp } from "firebase/firestore";

const Cart = () => {
  const { cart, getTotal } = useCart();
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
    <section>
      <div>
        <h1>Cart</h1>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <input type="text" required />
          <input type="email" required />
          <input type="text" required />
          <button type="submit"></button>
        </form>
      </div>
    </section>
  );
};

export default Cart;

import { useParams } from "react-router-dom";

const OrderSuccess = () => {
  const { orderId } = useParams();

  return (
    <section>
      <h1>¡Gracias por tu compra!</h1>
      <p>Tu código de seguimiento es:</p>
      <h2>{orderId}</h2>
      <p>Guárdalo para futuras consultas sobre tu pedido.</p>
    </section>
  );
};

export default OrderSuccess;

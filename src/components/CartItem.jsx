const CartItem = ({ item, handleDeleteClick }) => {
    return (
      <div className="cart-item">
        <h3>{item.title}</h3>
        <p>Cantidad: {item.quantity}</p>
        <p>Precio: ${item.price}</p>
        <p>Subtotal: ${item.quantity * item.price}</p>
        <button onClick={() => handleDeleteClick(item.id)}>Quitar del carrito</button>
      </div>
    );
  };
  
  export default CartItem;
  
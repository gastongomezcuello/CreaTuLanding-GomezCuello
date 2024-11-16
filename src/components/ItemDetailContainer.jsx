import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import Loader from "./Loader";

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const { productId } = useParams();

  useEffect(() => {
    const urlProduct = `https://fakestoreapi.com/products/${productId}`;

    fetch(urlProduct)
      .then((res) => res.json())
      .then((data) => {
        setItem(data);
      });
  }, [productId]);

  return <>{item ? <ItemDetail item={item} /> : <Loader />}</>;
};

export default ItemDetailContainer;

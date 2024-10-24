import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const { productId } = useParams();

  useEffect(() => {
    const urlProduct = `https://fakestoreapi.com/products/${productId}`;

    fetch(urlProduct)
      .then((res) => res.json())
      .then((data) => {
        setItem(data);
      });
  }, [productId]);

  return <ItemDetail item={item} />;
};

export default ItemDetailContainer;

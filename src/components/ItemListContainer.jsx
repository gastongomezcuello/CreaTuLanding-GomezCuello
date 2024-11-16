import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import ItemList from "./ItemList";
import Loader from "./Loader";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { categoryName } = useParams();

  useEffect(() => {
    const url = "https://fakestoreapi.com/products";
    const urlCategory = `https://fakestoreapi.com/products/category/${categoryName}`;

    fetch(categoryName ? urlCategory : url)
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
      });
  }, [categoryName]);

  return <>{items.length ? <ItemList items={items} /> : <Loader />}</>;
};

export default ItemListContainer;

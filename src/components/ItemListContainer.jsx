import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { getProducts, getProductsByCategory } from "../firebase/db";

import ItemList from "./ItemList";
import Loader from "./Loader";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryName } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    if (categoryName) {
      getProductsByCategory(categoryName)
        .then((res) => {
          if (!res.length) {
            navigate("/404");
          } else {
            setItems(res);
          }
        })
        .catch(() => navigate("/404"))
        .finally(() => setLoading(false));
    } else {
      getProducts()
        .then((res) => setItems(res))
        .catch(() => navigate("/404"))
        .finally(() => setLoading(false));
    }
  }, [categoryName, navigate]);

  return <>{loading ? <Loader /> : <ItemList items={items} />}</>;
};



export default ItemListContainer;

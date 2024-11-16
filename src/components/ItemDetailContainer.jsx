import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import Loader from "./Loader";

import { getProductById } from "../firebase/db";

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const { productId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);

    getProductById(productId)
      .then((res) => {
        if (!res) {
          navigate("/404");
        } else {
          setItem(res);
        }
      })
      .catch(() => navigate("/404"))
      .finally(() => setLoading(false));
  }, [productId, navigate]);

  return <>{loading ? <Loader /> : <ItemDetail item={item} />}</>;
};

export default ItemDetailContainer;

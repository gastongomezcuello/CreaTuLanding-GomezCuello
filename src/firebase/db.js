import { getFirestore, collection, doc, getDoc, getDocs, query, where, runTransaction } from "firebase/firestore";
import { app } from "./config";

const db = getFirestore(app);

export const getProducts = async () => {
  const querySnapshot = await getDocs(collection(db, "products"));
  const products = querySnapshot.docs.map((doc) => doc.data());
  
  return products;
};


export const getProductsByCategory = async (category) => {
  const q = query(collection(db, "products"), where("category", "==", category));
  const querySnapshot = await getDocs(q);
  const products = querySnapshot.docs.map((doc) => doc.data());
  
  return products;
};

export const getProductById = async (id) => {
  const docRef = doc(db, "products", id);
  const docSnap = await getDoc(docRef);
  
  return docSnap.exists() ? docSnap.data() : null;
};


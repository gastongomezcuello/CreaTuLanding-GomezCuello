import { getFirestore, collection, getDocs } from "firebase/firestore";
import { app } from "./config";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
// const firebaseConfig = {
//     FIREBASE_CONFIGURATION
// };

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

const getProducts = async () => {
  const querySnapshot = await getDocs(collection(db, "products"));
  const products = querySnapshot.docs.map((doc) => doc.data());
  return products;
};

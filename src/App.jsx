import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import PageNotFound from "./components/PageNotFound";
import Cart from "./components/Cart";
import OrderSuccess from "./components/OrderSuccess";

function App() {
  return (
    <>
      <Router>
        <header>
          <NavBar />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route
              path="/category/:categoryName"
              element={<ItemListContainer />} 
            />
            <Route
              path="/product/:productId"
              element={<ItemDetailContainer />}
            />
            <Route path="/cart" element={<Cart />} />
            <Route path="/order-success/:orderId" element={<OrderSuccess />} />
            <Route path="/*" element={<PageNotFound />} />
            <Route path="/404" element={<PageNotFound />} />
          </Routes>
        </main>
      </Router>
    </>
  );
}

export default App;

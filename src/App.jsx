import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <Router>
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            {/* <Route path="/category/:categoryId" element={} /> */}
          </Routes>
        </Router>
      </main>
    </>
  );
}

export default App;

import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <span>
        <b>
          <Link to="/">SocraTech</Link>
        </b>
      </span>
      {/* Etiquetas a modificar xd (la idea es poner un logo o algo) */}
      <nav>
        <ul>
          <li>
            <Link to="/category/electronics">Electronica</Link>
          </li>
          <li>
            <Link to="/category/jewelery">Joyeria</Link>
          </li>
          <li>
            <Link to="/category/men's clothing">Ropa de hombre</Link>
          </li>
          <li>
            <Link to="/category/women's clothing">Ropa de mujer</Link>
          </li>
        </ul>
      </nav>
      <CartWidget />
    </>
  );
}

export default NavBar;

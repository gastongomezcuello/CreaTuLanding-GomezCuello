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
            <Link to="/category/smartwatches">Smartwatches</Link>
          </li>
          <li>
            <Link to="/category/auriculares">Auriculares</Link>
          </li>
          <li>
            <Link to="/category/parlantes">Parlantes</Link>
          </li>
          <li>
            <Link to="/category/informatica">Informática</Link>
          </li>
        </ul>
      </nav>
      <CartWidget />
    </>
  );
}

export default NavBar;

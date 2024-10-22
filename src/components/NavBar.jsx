import CartWidget from "./CartWidget";

function NavBar() {
  return (
    <>
      <span>
        <b>SOCRATECH </b>
      </span>{" "}
      {/* Etiquetas a modificar xd (la idea es poner un logo o algo) */}
      <nav>
        <ul>
          <li>
            <a href="/">Auriculares</a>
          </li>
          <li>
            <a href="/"> Teclados</a>
          </li>
          <li>
            <a href="/">SmartWatchs</a>
          </li>
        </ul>
      </nav>
      <CartWidget />
    </>
  );
}

export default NavBar;

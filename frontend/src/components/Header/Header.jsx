import { NavLink } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <ul className="header_links">
        <li>
          <NavLink to="/" className="links">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/register" className="links">
            Register
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" className="links">
            Login
          </NavLink>
        </li>
        <li>
          <NavLink to="/add-product" className="links">
            Add-Products
          </NavLink>
        </li>
      </ul>
    </header>
  );
}

export default Header;

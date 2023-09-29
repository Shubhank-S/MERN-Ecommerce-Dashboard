import { NavLink } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <ul className="header_links">
        <li>
          <NavLink className="links">Register</NavLink>
        </li>
        <li>
          <NavLink className="links">LOGIN</NavLink>
        </li>
        <li>
          <NavLink className="links">Add-Products</NavLink>
        </li>
      </ul>
    </header>
  );
}

export default Header;

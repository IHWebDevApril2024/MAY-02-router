import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav>
      <ul>
        <NavLink className={({ isActive }) => isActive ? "selected" : ""} to="/">Home</NavLink>
        <NavLink className={({ isActive }) => isActive ? "selected" : ""} to="/user">User</NavLink>
        <NavLink className={({ isActive }) => isActive ? "selected" : ""} to="/sorry">Another page</NavLink>
      </ul>
    </nav>
  );
}

export default Navbar;

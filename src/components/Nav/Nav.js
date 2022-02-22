import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CartContext } from "../../CartContext";
import CartWidget from "./CartWidget";
import "./Nav.css";



const NavBar = () => {
  const {persons} = useContext(CartContext)
  return (
    <nav className="Navigation">
      <NavLink  activeClassName="active" to="/" className="logo" >
          GITHUB
        </NavLink>
      <ul className="List-ul">
        <NavLink activeClassName="active" to="/" className="Link">
          Home
        </NavLink>
        <NavLink activeClassName="active" to="/about" className="Link">
          About
        </NavLink>
        <NavLink activeClassName="active" to="/contact" className="Link">
          Contact
        </NavLink>
        <CartWidget></CartWidget>

      </ul>
    </nav>
  );
};

export default NavBar;
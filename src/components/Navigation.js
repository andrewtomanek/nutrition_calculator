import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import DatabaseControl from "./DatabaseControl.js";
import AuthControl from "./AuthControl.js";
import { AuthContext } from "../auth/Auth.js";

const Navigation = props => {
  const { currentUser } = useContext(AuthContext);
  if (currentUser) {
  }

  return (
    <nav className="main__navigation">
      <ul className="link__box">
        <li className="nav__link">
          <NavLink to="/">Domů</NavLink>
        </li>{" "}
        <li className="nav__link">
          <NavLink to="/cart">Košík</NavLink>
        </li>{" "}
      </ul>
      <DatabaseControl />
      <AuthControl />
    </nav>
  );
};

export default Navigation;

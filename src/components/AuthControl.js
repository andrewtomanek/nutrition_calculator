import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../auth/Auth.js";
import app from "../auth/base";

const AuthControl = props => {
  const { currentUser } = useContext(AuthContext);
  if (currentUser) {
  }
  return (
    <ul className="link__box">
      {!currentUser ? (
        <React.Fragment>
          {" "}
          <li className="nav__link">
            <NavLink to="/login">Přihlásit</NavLink>
          </li>
          <li className="nav__link">
            <NavLink to="/signup">Registrace</NavLink>
          </li>{" "}
        </React.Fragment>
      ) : (
        <li className="nav__link">
          <button className="auth__button" onClick={() => app.auth().signOut()}>
            Odhlásit
          </button>{" "}
        </li>
      )}
    </ul>
  );
};

export default AuthControl;

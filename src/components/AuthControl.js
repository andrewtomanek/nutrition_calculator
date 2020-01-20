import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../auth/Auth.js";
import { AuthButton } from "../styles/elements";
import app from "../auth/base";
import styled from "styled-components";

const NavigationList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const NavigationLink = styled.li`
  margin: 0 1rem;
  text-decoration: none;
`;

const AuthLink = styled(NavLink)`
  padding: 0.2rem 0.5rem;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 900;
  color: white;
  background: var(--green);
  border-radius: 0.5rem;
  border: 0.1rem solid white;
  &:hover {
    color: var(--green);
    background-color: white;
  }
  &.active {
    color: white;
    background: hsla(0, 80%, 80%, 1);
  }
`;

const AuthControl = props => {
  const { currentUser } = useContext(AuthContext);
  if (currentUser) {
  }
  return (
    <NavigationList>
      {!currentUser ? (
        <React.Fragment>
          {" "}
          <NavigationLink>
            <AuthLink to="/login">Přihlásit</AuthLink>
          </NavigationLink>
          <NavigationLink>
            <AuthLink to="/signup">Registrace</AuthLink>
          </NavigationLink>{" "}
        </React.Fragment>
      ) : (
        <NavigationLink>
          <AuthButton onClick={() => app.auth().signOut()}>Odhlásit</AuthButton>{" "}
        </NavigationLink>
      )}
    </NavigationList>
  );
};

export default AuthControl;

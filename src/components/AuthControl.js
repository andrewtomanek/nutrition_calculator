import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../auth/Auth.js";
import app from "../auth/base";

import styled from "styled-components";

const AuthButton = styled.button`
  padding: 0.2rem 0.5rem;
  font-size: 1rem;
  font-weight: 800;
  color: white;
  background: var(--green);
  border-radius: 0.5rem;
  border: 0.1rem solid white;
  cursor: pointer;
  transition: all 200ms cubic-bezier(0.215, 0.61, 0.355, 1);
  &:hover {
    color: var(--green);
    background-color: white;
  }
  @media all and (max-width: 480px) {
    padding: 0rem 0.5rem;
    font-size: 2rem;
  }
`;

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

const StyledLink = styled(NavLink)`
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
            <StyledLink to="/login">Přihlásit</StyledLink>
          </NavigationLink>
          <NavigationLink>
            <StyledLink to="/signup">Registrace</StyledLink>
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

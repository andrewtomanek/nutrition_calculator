import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import DatabaseControl from "./DatabaseControl.js";
import AuthControl from "../AuthControl.js";
import { AuthContext } from "../../auth/Auth.js";
import styled from "styled-components";

const MainNavigation = styled.nav`
  display: grid;
  grid-auto-flow: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 15vh;
  background: hsla(24, 90%, 60%, 1);
  padding: 0rem 0.5rem;
  @media all and (max-width: 980px) {
    height: 20vh;
    grid-auto-flow: row;
    padding: 0.3rem 0.5rem;
  }
  @media all and (max-width: 736px) {
    height: auto;
    grid-auto-flow: row;
    padding: 0.3rem 0.5rem;
  }
  @media all and (max-width: 480px) {
    grid-auto-flow: row;
    padding: 0.3rem 0.5rem;
    height: auto;
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

const NavigationItem = styled.li`
  margin: 0 1rem;
  text-decoration: none;
`;

const NavigationLink = styled(NavLink)`
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

const Navigation = props => {
  const { currentUser } = useContext(AuthContext);
  if (currentUser) {
  }

  return (
    <MainNavigation>
      <NavigationList>
        <NavigationItem>
          <NavigationLink to="/">Domů</NavigationLink>
        </NavigationItem>{" "}
        <NavigationItem>
          <NavigationLink to="/cart">Košík</NavigationLink>
        </NavigationItem>{" "}
      </NavigationList>
      <DatabaseControl />
      <AuthControl />
    </MainNavigation>
  );
};

export default Navigation;

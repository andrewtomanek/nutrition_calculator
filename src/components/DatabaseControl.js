import React, { useEffect, useState, useContext } from "react";
import { connect } from "react-redux";
import { initInventory, saveToStore } from "../store/actions/storageActions";
import { AuthContext } from "../auth/Auth.js";
import app from "../auth/base.js";
import { AuthButton } from "../styles/elements";
import styled from "styled-components";

const DataContainer = styled.div`
  width: 95%;
  display: grid;
  grid-gap: 0.1rem 0.3rem;
  grid-auto-flow: column;
  align-content: center;
  align-items: center;
  padding: 0.2rem 0.3rem;
`;

const LoginStatus = styled.p`
  padding: 0.1rem 0.5rem;
  font-size: 1.1rem;
  font-weight: 900;
  background-color: var(--yellow);
  color: hsla(80, 100%, 30%, 1);
  border-radius: 0.5rem;
  border: 0.2rem solid var(--green);
  @media all and (max-width: 480px) {
    padding: 0rem 0.5rem;
    font-size: 2rem;
  }
`;

const DatabaseControl = props => {
  const [currentToken, setCurrentToken] = useState(null);
  const [currentUid, setCurrentUid] = useState(null);
  useEffect(() => {
    app.auth().onAuthStateChanged(function(user) {
      if (user) {
        user.getIdToken().then(function(idToken) {
          setCurrentToken(idToken);
        });
        setCurrentUid(user.uid);
      }
    });
  }, []);

  const { currentUser } = useContext(AuthContext);
  const fetchData = () => {
    let authData = {};
    authData = {
      token: currentToken,
      uid: currentUid
    };
    props.initInventory(authData);
  };

  const saveData = () => {
    if (!props.foods) return;
    let userData = {};
    userData = {
      token: currentToken,
      email: currentUser.email,
      uid: currentUid,
      foods: props.foods,
      cart: props.cart,
      allItemSum: props.allItemSum
    };
    props.saveToStore(userData);
  };
  return (
    <DataContainer>
      {currentUser &&
      props.foods &&
      props.cart.length > 0 &&
      props.foods.length > 0 ? (
        <AuthButton onClick={() => saveData()}>Uložit</AuthButton>
      ) : null}{" "}
      {currentUser ? (
        <AuthButton onClick={() => fetchData()}>Nahrát</AuthButton>
      ) : null}
      {currentUser && <LoginStatus>{currentUser.email}</LoginStatus>}
    </DataContainer>
  );
};

const mapStateToProps = state => ({
  foods: state.foods,
  cart: state.cart,
  allItemSum: state.allItemSum
});

const mapDispatchToProps = {
  initInventory,
  saveToStore
};

export default connect(mapStateToProps, mapDispatchToProps)(DatabaseControl);

import React, { useEffect, useState, useContext } from "react";
import { connect } from "react-redux";
import { initInventory, saveToStore } from "../store/actions/storageActions";
import { AuthContext } from "../auth/Auth.js";
import app from "../auth/base.js";

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
    <div className="data__control">
      {currentUser &&
      props.foods &&
      props.cart.length > 0 &&
      props.foods.length > 0 ? (
        <button className="auth__button" onClick={() => saveData()}>
          Uložit
        </button>
      ) : null}{" "}
      {currentUser ? (
        <button className="auth__button" onClick={() => fetchData()}>
          Nahrát
        </button>
      ) : null}
      {currentUser && <p className="login__display">{currentUser.email}</p>}
    </div>
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DatabaseControl);

import React, { useState, useEffect } from "react";
import SwitcherPanel from "../components/panels/SwitcherPanel";
import ItemsList from "../components/ItemsList";
import BarBox from "../components/BarBox";
import EmptyCart from "../components/EmptyCart";
import Footer from "../components/Footer";
import { connect } from "react-redux";
import {
  addToStorage,
  toggleCartComplete,
  deleteCartAction,
  deleteStorageAction,
  applyFilterReset,
  applyCartRefresh
} from "../store/actions/storageActions";
import database from "../data/db.json";
import { CSSTransition } from "react-transition-group";
import { PageLayout } from "../styles/elements.js";

const Cart = props => {
  const [showLimit, setShowLimit] = useState(false);
  const [inProp, setInProp] = useState(false);

  useEffect(() => {
    let inventory = localStorage.getItem("inventory");
    let cartSession = localStorage.getItem("cart");
    let initialArray = [];
    for (let i = 0; i < 5; i++) {
      initialArray.push(database[i]);
    }
    if (
      JSON.stringify(props.foods) === JSON.stringify(initialArray) &&
      inventory
    ) {
      props.applyFilterReset(JSON.parse(inventory));
      if (cartSession) props.applyCartRefresh(JSON.parse(cartSession));
    }
    setInProp(true);
  }, []);

  useEffect(() => {
    localStorage.setItem("inventory", JSON.stringify(props.foods));
    localStorage.setItem("cart", JSON.stringify(props.cart));
  });

  const revealLimit = () => {
    setShowLimit(!showLimit);
  };

  const moveToStorage = item => {
    props.addToStorage(item);
    props.deleteStorageAction(item.id);
  };

  const pickItem = id => {
    props.toggleCartComplete(id);
  };

  const removeItem = id => {
    props.deleteCartAction(id);
  };

  return (
    <CSSTransition
      component={null}
      in={inProp}
      timeout={500}
      classNames="anim-left"
      mountOnEnter
      unmountOnExit
    >
      <PageLayout>
        <SwitcherPanel revealLimit={revealLimit} cartControls />
        <BarBox showLimit={showLimit} />
        {props.cart.length > 0 ? (
          <ItemsList
            foods={props.cart}
            moveToStorage={moveToStorage}
            removeItem={removeItem}
            pickItem={pickItem}
            basicButtons={false}
          />
        ) : (
          <EmptyCart showResetButton={false} />
        )}
        <Footer />
      </PageLayout>
    </CSSTransition>
  );
};

const mapStateToProps = state => ({
  foods: state.foods,
  cart: state.cart,
  allItemSum: state.allItemSum,
  updateItemSum: state.updateItemSum
});

const mapDispatchToProps = {
  addToStorage,
  toggleCartComplete,
  deleteCartAction,
  deleteStorageAction,
  applyFilterReset,
  applyCartRefresh
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);

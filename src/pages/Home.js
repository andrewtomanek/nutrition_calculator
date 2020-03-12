import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import Form from "../components/forms/Form";
import SwitcherPanel from "../components/panels/SwitcherPanel";
import SortPanel from "../components/panels/SortPanel";
import FilterPanel from "../components/panels/FilterPanel";
import MorePanel from "../components/panels/MorePanel";
import BarBox from "../components/BarBox";
import ItemsList from "../components/ItemsList";
import EmptyCart from "../components/EmptyCart";
import Footer from "../components/Footer";
import { connect } from "react-redux";
import {
  initInventory,
  applyFilterReset,
  applyCartRefresh,
  addToCart,
  fillStorage,
  updateQuantity,
  toggleFoodComplete,
  deleteFoodAction,
  deleteCartAction
} from "../store/actions/storageActions";
import database from "../data/db";
import { PageLayout, ControlsLayout } from "../styles/elements.js";

const Home = props => {
  const [showFilters, setShowFilters] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const [showLimit, setShowLimit] = useState(false);
  const [inProp, setInProp] = useState(false);
  let [dataIndex, setDataIndex] = useState(4);

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

  const displayMore = () => {
    if (!props.foods) return;
    if (database.length < dataIndex) return;
    if (dataIndex <= 4) dataIndex = 8;
    setDataIndex(dataIndex + 4);
    let initialArray = database;
    for (let i = 0; i < dataIndex; i++) {
      props.fillStorage(initialArray[i]);
    }
  };

  const revealFilters = () => {
    setShowFilters(!showFilters);
  };

  const revealInput = () => {
    setShowInput(!showInput);
  };

  const revealLimit = () => {
    setShowLimit(!showLimit);
  };

  const minusToCart = id => {
    props.deleteCartAction(id);
  };

  const plusToCart = item => {
    props.addToCart(item);
  };

  const moveToCart = item => {
    props.addToCart(item);
    props.deleteFoodAction(item.id);
  };

  const pickItem = id => {
    props.toggleFoodComplete(id);
  };

  const updateNumber = (item, id) => {
    props.updateQuantity([item, id]);
  };

  const removeFromStorage = id => {
    props.deleteFoodAction(id);
  };

  const resetFilter = () => {
    props.applyFilterReset(database);
  };

  return (
    <CSSTransition
      component={null}
      in={inProp}
      timeout={500}
      classNames="anim-right"
      mountOnEnter
      unmountOnExit
    >
      <PageLayout>
        <SwitcherPanel
          cartControls={false}
          revealFilters={revealFilters}
          revealInput={revealInput}
          revealLimit={revealLimit}
        />
        <CSSTransition
          in={showInput}
          timeout={300}
          classNames="alert"
          unmountOnExit
        >
          <Form />
        </CSSTransition>
        <CSSTransition
          in={showFilters}
          timeout={300}
          classNames="alert"
          unmountOnExit
        >
          <ControlsLayout>
            <FilterPanel />
            <SortPanel />
          </ControlsLayout>
        </CSSTransition>
        <BarBox showLimit={showLimit} />
        {props.foods && props.foods.length > 0 ? (
          <ItemsList
            foods={props.foods}
            minusToCart={minusToCart}
            updateNumber={updateNumber}
            plusToCart={plusToCart}
            moveToCart={moveToCart}
            pickItem={pickItem}
            removeFromStorage={removeFromStorage}
            basicButtons
          />
        ) : (
          <EmptyCart resetFilter={resetFilter} showResetButton />
        )}
        <MorePanel displayMore={displayMore} />
        <Footer />
      </PageLayout>
    </CSSTransition>
  );
};

const mapStateToProps = state => ({
  foods: state.foods,
  cart: state.cart,
  allItemSum: state.allItemSum
});

const mapDispatchToProps = {
  initInventory,
  applyFilterReset,
  applyCartRefresh,
  addToCart,
  toggleFoodComplete,
  updateQuantity,
  deleteFoodAction,
  deleteCartAction,
  fillStorage
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

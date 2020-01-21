import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import Navigation from "../components/Navigation";
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
  let [dataIndex, setDataIndex] = useState(4);

  useEffect(() => {
    let data = sessionStorage.getItem("inventory");
    let initialArray = [];
    for (let i = 0; i < 5; i++) {
      initialArray.push(database[i]);
    }
    console.log(JSON.stringify(props.foods) === JSON.stringify(initialArray));
    if (JSON.stringify(props.foods) === JSON.stringify(initialArray) && data) {
      props.applyFilterReset(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    sessionStorage.setItem("inventory", JSON.stringify(props.foods));
  });

  const displayMore = () => {
    if (!props.foods) return;
    if (database.length < dataIndex) return;
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
    <PageLayout>
      <Navigation />
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
  addToCart,
  toggleFoodComplete,
  updateQuantity,
  deleteFoodAction,
  deleteCartAction,
  fillStorage
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

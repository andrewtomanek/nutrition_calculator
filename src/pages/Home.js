import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import Navigation from "../components/Navigation";
import Form from "../components/Form";
import SwitcherPanel from "../components/SwitcherPanel";
import SortPanel from "../components/SortPanel";
import FilterPanel from "../components/FilterPanel";
import MorePanel from "../components/MorePanel";
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
import styled from 'styled-components'

const PageLayout = styled.div`
display: grid;
grid-auto-flow: row;
justify-items: center;
margin: 0;
padding: 0;
min-height: 100vh;
overflow: hidden;
@media all and (max-width: 480px) {
    font-size: 1.1rem;
  }
`;

const Home = props => {
  const [showFilters, setShowFilters] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const [showLimit, setShowLimit] = useState(false);
  let [dataIndex, setDataIndex] = useState(4);

  useEffect(() => {
    displayMore();
  }, []);

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
        <div className="controls__box">
          <FilterPanel />
          <SortPanel />
        </div>
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

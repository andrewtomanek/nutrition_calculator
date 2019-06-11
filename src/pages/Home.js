import React, { useState, useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Navigation from "../components/Navigation";
import Form from "../components/Form";
import SortPanel from "../components/SortPanel";
import FilterPanel from "../components/FilterPanel";
import BarBox from "../components/BarBox";
import Storage from "../components/Storage";
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
import "../App.css";

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

  const resetFilter = newArray => {
    props.applyFilterReset(database);
  };

  return (
    <div className="app">
      <Navigation />
      <div className="switch__panel">
        <button className="item__button" onClick={() => displayMore()}>
          Více
        </button>
      </div>
      <div className="switch__panel">
        <button
          className="item__button"
          onClick={() => setShowFilters(!showFilters)}
        >
          Vyfiltrovat
        </button>{" "}
        <button
          className="item__button"
          onClick={() => setShowInput(!showInput)}
        >
          Přidat
        </button>{" "}
        <button
          className="item__button"
          onClick={() => setShowLimit(!showLimit)}
        >
          Limit
        </button>
      </div>
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
        <TransitionGroup className="item__list">
          {props.foods.map((item, index) => (
            <CSSTransition
              key={item.id}
              appear={true}
              timeout={300}
              classNames="item"
            >
              <Storage
                key={item.id}
                index={index}
                item={item}
                minusToCart={minusToCart}
                updateNumber={updateNumber}
                plusToCart={plusToCart}
                moveToCart={moveToCart}
                pickItem={pickItem}
                removeFromStorage={removeFromStorage}
              />
            </CSSTransition>
          ))}
        </TransitionGroup>
      ) : (
        <div className="empty__cart">
          {" "}
          <button
            className="filter__button"
            onClick={() => resetFilter(props.foods)}
          >
            Znovu
          </button>
        </div>
      )}
      <Footer />
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
  applyFilterReset,
  addToCart,
  toggleFoodComplete,
  updateQuantity,
  deleteFoodAction,
  deleteCartAction,
  fillStorage
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

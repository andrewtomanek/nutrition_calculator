import React, { useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Navigation from "../components/Navigation";
import SwitcherPanel from "../components/SwitcherPanel";
import CartItem from "../components/CartItem";
import BarBox from "../components/BarBox";
import EmptyCart from "../components/EmptyCart";
import Footer from "../components/Footer";
import { connect } from "react-redux";
import {
  addToStorage,
  toggleCartComplete,
  deleteCartAction,
  deleteStorageAction
} from "../store/actions/storageActions";
import "../App.css";

const Cart = props => {
  const [showLimit, setShowLimit] = useState(false);

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
    <div className="app">
      <Navigation />
      <SwitcherPanel revealLimit={revealLimit} cartControls />
      <BarBox showLimit={showLimit} />
      {props.cart.length > 0 ? (
        <TransitionGroup className="item__list">
          {props.cart.map((item, index) => (
            <CSSTransition
              key={item.id}
              appear={true}
              timeout={300}
              classNames="item"
            >
              <CartItem
                key={item.id}
                index={index}
                item={item}
                moveToStorage={moveToStorage}
                removeItem={removeItem}
                pickItem={pickItem}
              />
            </CSSTransition>
          ))}
        </TransitionGroup>
      ) : (
        <EmptyCart showResetButton={false} />
      )}
      <Footer />
    </div>
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
  deleteStorageAction
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);

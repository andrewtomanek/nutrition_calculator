import React, { useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Navigation from "../components/Navigation";
import CalculatePanel from "../components/CalculatePanel";
import CartItem from "../components/CartItem";
import BarBox from "../components/BarBox";
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
  console.log(props.cart);
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
      <div className="switch__panel">
        <CalculatePanel />
        <button
          className="item__button"
          onClick={() => setShowLimit(!showLimit)}
        >
          Limit
        </button>
      </div>
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
        <div className="empty__cart">
          <p className="empty__text">Žádné položky</p>
        </div>
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);

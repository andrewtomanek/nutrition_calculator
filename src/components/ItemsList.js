import React from "react";
import Storage from "../components/Storage";
import { CSSTransition, TransitionGroup } from "react-transition-group";

export default function ItemsList({
  foods,
  minusToCart,
  updateNumber,
  plusToCart,
  moveToCart,
  pickItem,
  removeFromStorage
}) {
  return (
    <TransitionGroup className="item__list">
      {foods.map((item, index) => (
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
  );
}

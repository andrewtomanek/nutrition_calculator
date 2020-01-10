import React from "react";
import CardBox from "../components/CardBox";
import { CSSTransition, TransitionGroup } from "react-transition-group";

export default function ItemsList({
  foods,
  minusToCart,
  updateNumber,
  plusToCart,
  moveToCart,
  moveToStorage,
  pickItem,
  removeFromStorage,
  removeItem,
  basicButtons
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
          <CardBox
            key={item.id}
            index={index}
            item={item}
            minusToCart={minusToCart}
            updateNumber={updateNumber}
            plusToCart={plusToCart}
            moveToCart={moveToCart}
            moveToStorage={moveToStorage}
            pickItem={pickItem}
            removeFromStorage={removeFromStorage}
            removeItem={removeItem}
            basicButtons={basicButtons}
          />
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
}

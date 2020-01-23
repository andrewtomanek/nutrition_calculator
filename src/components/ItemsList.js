import React from "react";
import CardBox from "../components/CardBox";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import styled from "styled-components";

const ListContainer = styled.section`
  display: grid;
  grid-gap: 2rem 0.5rem;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(auto-fill, minmax(50vh, 1fr));
  align-items: center;
  align-content: space-between;
  justify-content: space-between;
  background-color: var(--orange);
  border-radius: 0.5rem;
  padding: 1rem;
  max-width: 90vw;
  @media all and (max-width: 2380px) {
    grid-gap: 1rem 0.5rem;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(auto-fill, minmax(50vh, 1fr));
  }
    @media all and (max-width: 1980px) {
    grid-gap: 1rem 0.5rem;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(auto-fill, minmax(60vh, 1fr));
  }
  @media all and (max-width: 1680px) {
    grid-gap: 1rem 0.5rem;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(auto-fill, minmax(70vh, 1fr));
  }
  @media all and (max-width: 980px) {
    grid-gap: 1rem 0.5rem;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(auto-fill, minmax(80vh, 1fr));
  }
  @media all and (max-width: 736px) {
    grid-gap: 1rem 0.5rem;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(auto-fill, minmax(90vh, 1fr));
  }
  @media all and (max-width: 480px) {
    display: grid;
    grid-gap: 1rem 0.5rem;
    grid-template-columns: 100%;
    grid-template-rows: repeat(auto-fill, minmax(100vh, 1fr));
  }
`;

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
    <ListContainer>
      <TransitionGroup component={null}>
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
    </ListContainer>
  );
}

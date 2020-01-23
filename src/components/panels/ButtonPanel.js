import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { BasicButton, GreenButton, RedButton } from "../../styles/elements.js";

const UnitInput = styled.input`
  width: 80%;
  margin: 0;
  padding: 0.1rem 0.3rem;
  font-size: 1rem;
  font-weight: 600;
  text-align: center;
  background-color: var(--green);
  color: #fff;
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export default function ButtonPanel({ item, basicButtons, ...props }) {
  const [itemQuantity, setQuantity] = useState(1);
  const [oldItem, setOldItem] = useState(item);

  const ControlsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-content: end;
    justify-content: center;
    grid-area: 2 / 1 / 3 / 1;
    z-index: 4;
    height: 100%;
    width: 100%;
    font-size: 1rem;
    font-weight: 900;
    color: #fff;
    grid-template-rows: ${() => (basicButtons ? "1fr 1fr" : "1fr")};
  `;

  useEffect(() => {
    setOldItem(item);
  }, [item]);

  const handleInput = e => {
    let currentValue = e.target.value;
    setQuantity(e.target.value);
    let newItem = {
      ...item,
      picked: true,
      cena: +((oldItem.cena / oldItem.množství) * currentValue),
      kalorie: +((oldItem.kalorie / oldItem.množství) * currentValue),
      tuky: +((oldItem.tuky / oldItem.množství) * currentValue),
      sacharidy: +((oldItem.sacharidy / oldItem.množství) * currentValue),
      vláknina: +((oldItem.vláknina / oldItem.množství) * currentValue),
      bílkoviny: +((oldItem.bílkoviny / oldItem.množství) * currentValue),
      množství: +currentValue
    };
    props.updateNumber(newItem, item.id);
  };

  return (
    <ControlsContainer>
      {basicButtons ? (
        <BasicButton onClick={() => props.moveToCart(item)}>
          {"\u{1F6D2}"}
        </BasicButton>
      ) : (
        <BasicButton onClick={() => props.moveToStorage(item)}>
          {"\u{1F5D1}"}
        </BasicButton>
      )}
      <BasicButton onClick={() => props.pickItem(item.id)}>
        {"\u{2714}"}
      </BasicButton>
      {basicButtons ? (
        <BasicButton onClick={() => props.removeFromStorage(item.id)}>
          {"\u{274C}"}
        </BasicButton>
      ) : (
        <BasicButton onClick={() => props.removeItem(item.id)}>
          {"\u{274C}"}
        </BasicButton>
      )}
      {basicButtons && (
        <>
          <RedButton onClick={() => props.minusToCart(item.id)}>-</RedButton>
          <UnitInput
            type="number"
            min="1"
            value={itemQuantity}
            onChange={e => handleInput(e)}
          />
          <GreenButton onClick={() => props.plusToCart(item)}>+</GreenButton>
        </>
      )}
    </ControlsContainer>
  );
}

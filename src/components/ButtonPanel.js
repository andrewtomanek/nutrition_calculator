import React, { useState, useEffect } from "react";
import styled from "styled-components";

const UnitInput = styled.input`
  width: 80%;
  margin: 0;
  padding: 0.1rem 0.3rem;
  font-size: 1rem;
  font-weight: 600;
  text-align: center;
  background-color: var(--green);
  color: #fff;
`;

const BasicButton = styled.button`
  padding: 0.3rem 1rem;
  font-size: 1.6rem;
  font-weight: 900;
  background-color: var(--green);
  color: #fff;
  z-index: 4;
  transition: all 200ms cubic-bezier(0.215, 0.61, 0.355, 1);
  &:hover {
    color: var(--green);
    background-color: white;
  }
  @media all and (max-width: 1680px) {
    font-size: 1.5rem;
  }
  @media all and (max-width: 980px) {
    font-size: 1.3rem;
  }
  @media all and (max-width: 736px) {
    font-size: 1.2rem;
  }
  @media all and (max-width: 480px) {
    font-size: 1.1rem;
  }
`;

const GreenButton = styled(BasicButton)`
  background-color: var(--green);
color: hsla(24, 70%, 50%, 1);
  &:hover {
    color: var(--green);
  background-color: hsla(24, 70%, 50%, 1);
  }
`;

const RedButton = styled(BasicButton)`
  background-color: var(--green);
  color: red;
  &:hover {
    background-color: red;
  color: var(--green);
  }
`;



export default function ButtonPanel({item, basicButtons,...props }) {
  const [itemQuantity, setQuantity] = useState(0);
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
  grid-template-rows: ${() => basicButtons ? "1fr 1fr" : "1fr"};

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
      cena: +(oldItem.cena * currentValue),
      kalorie: +(oldItem.kalorie * currentValue),
      tuky: +(oldItem.tuky * currentValue),
      sacharidy: +(oldItem.sacharidy * currentValue),
      vláknina: +(oldItem.vláknina * currentValue),
      bílkoviny: +(oldItem.bílkoviny * currentValue),
      množství: +(oldItem.množství * currentValue)
    };
    props.updateNumber(newItem, item.id);
  };

  return (
    <ControlsContainer>
     {basicButtons ? ( <BasicButton
        onClick={() => props.moveToCart(item)}
      >
        {"\u{1F6D2}"}
      </BasicButton>) :(
        <BasicButton onClick={() => props.moveToStorage(item)}>
          {"\u{1F5D1}"}
        </BasicButton>
      )}
      <BasicButton
        onClick={() => props.pickItem(item.id)}
      >
        {"\u{2714}"}
      </BasicButton>
      {basicButtons ? (
      <BasicButton
        onClick={() => props.removeFromStorage(item.id)}
      >
        {"\u{274C}"}
      </BasicButton>) :(
           <BasicButton onClick={() => props.removeItem(item.id)}>
           {"\u{274C}"}
         </BasicButton>
      )}
      {basicButtons && (<>
      <RedButton
        onClick={() => props.minusToCart(item.id)}
      >
        -
      </RedButton>
      <UnitInput
        type="number"
        value={itemQuantity}
        onChange={e => handleInput(e)}
      />
      <GreenButton
        onClick={() => props.plusToCart(item)}
      >
        +
      </GreenButton></>)}
    </ControlsContainer>
  );
}

import React, { useState } from "react";
import styled from "styled-components";

const InputContainer = styled.div`
    display: grid;
  align-items: center;
  justify-items: center;
  justify-content: center;
  padding: 0.1rem 0.3rem;
  background-color: hsla(40, 90%, 50%, 1);
  width: 95%;
`;

const InputBox = styled.form`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, auto);
  grid-auto-flow: row;
  align-items: center;
  align-content: space-around;
  justify-content: center;
  padding: 0.1rem 0.3rem;
  background-color: hsla(40, 90%, 50%, 1);
`;

const InputField = styled.input`
 width: 40%;
  margin: 0;
  padding: 0.1rem 0.3rem;
  font-size: 1rem;
  font-weight: 600;
  color: hsla(70, 30%, 30%, 1);
  background-color: #fff;
`;

const InputLabel= styled.label`
height: 100%;
  margin: 0;
  padding: 0.1rem 0.3rem;
  font-size: 1rem;
  font-weight: 600;
  text-align: right;
  color: #fff;
`;

const SubmitButton= styled.button`
  grid-column-start: 4;
  grid-column-end: 5;
  padding: 0.3rem 1rem;
  font-size: 1rem;
  font-weight: 900;
  background-color: var(--green);
  color: #fff;
`;

const FormLimit = props => {
  const [itemPrice, setPrice] = useState(200);
  const [itemCalories, setCalories] = useState(2000);
  const [itemFat, setFat] = useState(70);
  const [itemSacharidy, setSacharidy] = useState(130);
  const [itemFiber, setFiber] = useState(38);
  const [itemProtein, setProtein] = useState(56);
  const [itemQuantity, setQuantity] = useState(10);

  const handleSubmit = e => {
    e.preventDefault();
    const inputObject = {
      bílkoviny: +itemProtein,
      cena: +itemPrice,
      kalorie: +itemCalories,
      množství: +itemQuantity,
      sacharidy: +itemSacharidy,
      tuky: +itemFat,
      vláknina: +itemFiber
    };
    props.updateBarValues(inputObject);
  };

  return (
    <InputContainer>
      <InputBox onSubmit={handleSubmit}>
        <InputLabel>Cena</InputLabel>
        <InputField
          type="number"
          value={itemPrice}
          onChange={e => setPrice(e.target.value)}
        />
        <InputLabel>Kalorie</InputLabel>
        <InputField
          type="number"
          value={itemCalories}
          onChange={e => setCalories(e.target.value)}
        />
        <InputLabel>Tuky</InputLabel>
        <InputField
          type="number"
          value={itemFat}
          onChange={e => setFat(e.target.value)}
        />
        <InputLabel>Sacharidy</InputLabel>
        <InputField
          type="number"
          value={itemSacharidy}
          onChange={e => setSacharidy(e.target.value)}
        />
        <InputLabel>Vláknina</InputLabel>
        <InputField
          type="number"
          value={itemFiber}
          onChange={e => setFiber(e.target.value)}
        />
        <InputLabel>Bílkoviny</InputLabel>
        <InputField
          type="number"
          value={itemProtein}
          onChange={e => setProtein(e.target.value)}
        />
        <InputLabel>Množství</InputLabel>
        <InputField
          type="number"
          value={itemQuantity}
          onChange={e => setQuantity(e.target.value)}
        />
        <SubmitButton type="submit">
        Uložit
        </SubmitButton>
      </InputBox>
    </InputContainer>
  );
};

export default FormLimit;

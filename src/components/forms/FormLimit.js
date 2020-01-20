import React, { useState } from "react";
import {
  InputContainer,
  InputBox,
  InputField,
  InputLabel,
  SubmitButton
} from "../../styles/elements.js";

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
        <SubmitButton type="submit">Uložit</SubmitButton>
      </InputBox>
    </InputContainer>
  );
};

export default FormLimit;

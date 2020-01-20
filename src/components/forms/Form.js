import React, { useState } from "react";
import { connect } from "react-redux";
import { addFoodAction } from "../../store/actions/storageActions";
import {
  InputContainer,
  InputBox,
  InputField,
  InputTextField,
  InputCheckBox,
  InputLabel,
  SubmitButton
} from "../../styles/elements.js";

const CartForm = props => {
  const [itemName, setName] = useState("");
  const [itemCheckbox, setCheckbox] = useState(false);
  const [itemPrice, setPrice] = useState(0);
  const [itemCalories, setCalories] = useState(0);
  const [itemFat, setFat] = useState(0);
  const [itemSacharidy, setSacharidy] = useState(0);
  const [itemFiber, setFiber] = useState(0);
  const [itemProtein, setProtein] = useState(0);
  const [itemQuantity, setQuantity] = useState(0);

  const handleSubmit = e => {
    e.preventDefault();
    if (!itemName) return;
    //if (itemName.length < 4) return;
    let randomId = (Math.random() * 999999).toFixed(0);
    const inputObject = {
      id: +randomId,
      image: itemName,
      picked: itemCheckbox,
      cena: +itemPrice,
      kalorie: +itemCalories,
      tuky: +itemFat,
      sacharidy: +itemSacharidy,
      vláknina: +itemFiber,
      bílkoviny: +itemProtein,
      množství: +itemQuantity
    };
    props.addFoodAction(inputObject);
    setName("");
    setCheckbox(false);
    setPrice("");
    setCalories("");
    setFat("");
    setSacharidy("");
    setFiber("");
    setProtein("");
    setQuantity("");
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
        <InputLabel>Info</InputLabel>
        <InputCheckBox
          type="checkbox"
          value={itemCheckbox}
          onChange={e => setCheckbox(e.target.value)}
        />
        <InputLabel>Název</InputLabel>
        <InputTextField
          type="text"
          value={itemName}
          onChange={e => setName(e.target.value)}
        />
        <SubmitButton type="submit">Uložit</SubmitButton>
      </InputBox>
    </InputContainer>
  );
};

const mapStateToProps = state => ({
  foods: state.foods
});

export default connect(mapStateToProps, { addFoodAction })(CartForm);

import React, { useState } from "react";
import { connect } from "react-redux";
import { addFoodAction } from "../store/actions/storageActions";

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
    <div className="input__wrap">
      <form className="input__box" onSubmit={handleSubmit}>
        <label className="input__label">Cena</label>
        <input
          type="number"
          className="input__field"
          value={itemPrice}
          onChange={e => setPrice(e.target.value)}
        />
        <label className="input__label">Kalorie</label>
        <input
          type="number"
          className="input__field"
          value={itemCalories}
          onChange={e => setCalories(e.target.value)}
        />
        <label className="input__label">Tuky</label>
        <input
          type="number"
          className="input__field"
          value={itemFat}
          onChange={e => setFat(e.target.value)}
        />
        <label className="input__label">Sacharidy</label>
        <input
          type="number"
          className="input__field"
          value={itemSacharidy}
          onChange={e => setSacharidy(e.target.value)}
        />
        <label className="input__label">Vláknina</label>
        <input
          type="number"
          className="input__field"
          value={itemFiber}
          onChange={e => setFiber(e.target.value)}
        />
        <label className="input__label">Bílkoviny</label>
        <input
          type="number"
          className="input__field"
          value={itemProtein}
          onChange={e => setProtein(e.target.value)}
        />
        <label className="input__label">Množství</label>
        <input
          type="number"
          className="input__field"
          value={itemQuantity}
          onChange={e => setQuantity(e.target.value)}
        />
        <label className="input__label">Info</label>
        <input
          type="checkbox"
          className="input__field"
          value={itemCheckbox}
          onChange={e => setCheckbox(e.target.value)}
        />
        <label className="input__label">Název</label>
        <input
          type="text"
          className="input__field-text"
          value={itemName}
          onChange={e => setName(e.target.value)}
        />
        <button className="submit__button" type="submit">
          submit
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = state => ({
  foods: state.foods
});

export default connect(
  mapStateToProps,
  { addFoodAction }
)(CartForm);

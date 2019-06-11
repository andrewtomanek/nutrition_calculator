import React, { useState } from "react";

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
    <div className="bar__panel">
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
        <button className="submit__button" type="submit">
          submit
        </button>
      </form>
    </div>
  );
};

export default FormLimit;

import React, { useState, useEffect } from "react";

function importAll(r) {
  let images = {};
  r.keys().map(item => {
    return (images[item.replace("./", "")] = r(item));
  });
  return images;
}

const images = importAll(
  require.context("../../public/img/cont", false, /\.(png|jpe?g|svg)$/)
);

const Storage = ({
  item,
  index,
  plusToCart,
  updateNumber,
  minusToCart,
  moveToCart,
  removeFromStorage,
  pickItem
}) => {
  const [itemQuantity, setQuantity] = useState(0);
  const [oldItem, setOldItem] = useState(item);

  useEffect(() => {
    setOldItem(item);
  }, []);

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
    updateNumber(newItem, item.id);
  };

  return (
    <div className="item__container">
      <div className="text__box" onClick={() => pickItem(item.id)}>
        <p className="item__text">Název: {item.image}</p>
        <p className="item__text">Cena: {item.cena.toFixed(0)}</p>
        <p className="item__text">Kalorie: {item.kalorie.toFixed(0)}</p>
        <p className="item__text">Tuky: {item.tuky.toFixed(0)}</p>
        <p className="item__text">Sacharidy: {item.sacharidy.toFixed(0)}</p>
        <p className="item__text">Vláknina: {item.vláknina.toFixed(0)}</p>
        <p className="item__text">Bílkoviny: {item.bílkoviny.toFixed(0)}</p>
        <p className="item__text">Množství: {item.množství.toFixed(0)}</p>
      </div>
      <div className={item.picked ? "pic__box" : "pic__box picked__box"}>
        <img
          className={item.picked ? "item__pic picked__pic" : "item__pic"}
          //  style={{ filter: item.picked ? "" : "hue-rotate(180deg)" }}
          src={images[item.image + ".jpg"]}
          alt={item.image}
        />
      </div>
      <div className="item__controls">
        <button className="item__button" onClick={() => moveToCart(item)}>
          {"\u{1F6D2}"}
        </button>
        <button className="item__button" onClick={() => pickItem(item.id)}>
          {"\u{2714}"}
        </button>
        <button
          className="item__button"
          onClick={() => removeFromStorage(item.id)}
        >
          {"\u{274C}"}
        </button>
        <button
          className="item__button-red"
          onClick={() => minusToCart(item.id)}
        >
          -
        </button>
        <input
          type="number"
          className="item__input"
          value={itemQuantity}
          onChange={e => handleInput(e)}
        />
        <button className="item__button-green" onClick={() => plusToCart(item)}>
          +
        </button>
      </div>
    </div>
  );
};

export default Storage;

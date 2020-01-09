import React, { useState, useEffect } from "react";

export default function ButtonPanel({item,...props }) {
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
    props.updateNumber(newItem, item.id);
  };

  return (
    <div className="item__controls">
      <button
        className="item__button"
        onClick={() => props.moveToCart(item)}
      >
        {"\u{1F6D2}"}
      </button>
      <button
        className="item__button"
        onClick={() => props.pickItem(item.id)}
      >
        {"\u{2714}"}
      </button>
      <button
        className="item__button"
        onClick={() => props.removeFromStorage(item.id)}
      >
        {"\u{274C}"}
      </button>
      <button
        className="item__button-red"
        onClick={() => props.minusToCart(item.id)}
      >
        -
      </button>
      <input
        type="number"
        className="item__input"
        value={itemQuantity}
        onChange={e => handleInput(e)}
      />
      <button
        className="item__button-green"
        onClick={() => props.plusToCart(item)}
      >
        +
      </button>
    </div>
  );
}

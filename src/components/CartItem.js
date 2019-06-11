import React from "react";

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

const CartItem = ({ item, index, moveToStorage, removeItem, pickItem }) => {
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
      <div className="cart__controls">
        <button className="item__button" onClick={() => moveToStorage(item)}>
          {"\u{1F5D1}"}
        </button>
        <button className="item__button" onClick={() => pickItem(item.id)}>
          {"\u{2714}"}
        </button>
        <button className="item__button" onClick={() => removeItem(item.id)}>
          {"\u{274C}"}
        </button>
      </div>
    </div>
  );
};

export default CartItem;

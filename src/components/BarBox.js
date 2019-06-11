import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { updateCalculateSum } from "../store/actions/storageActions";
import FormLimit from "./FormLimit";
import { CSSTransition } from "react-transition-group";
import "../App.css";

const BarBox = props => {
  const [barData, setbarData] = useState([]);
  const [barInitValues, setBarInitValues] = useState({
    bílkoviny: 56,
    cena: 200,
    kalorie: 2000,
    množství: 10,
    sacharidy: 130,
    tuky: 70,
    vláknina: 38
  });

  useEffect(() => {
    let oldValue = 0;
    let initCart = [
      {
        bílkoviny: 0,
        cena: 0,
        id: 0,
        image: "",
        kalorie: 0,
        množství: 0,
        picked: false,
        sacharidy: 0,
        tuky: 0,
        vláknina: 0
      }
    ];
    let map = new Map();
    let set = new Set();
    if (props.cart.length > 0) {
      initCart = props.cart;
    }
    for (let item of initCart) {
      for (let itemEntry of Object.entries(item)) {
        if (
          typeof itemEntry[1] === "number" &&
          typeof itemEntry[1] !== "boolean" &&
          itemEntry[0] !== "id"
        ) {
          set.add(itemEntry[0]);
          for (let key of set.keys()) {
            oldValue = map.get(key) || 0;
            if (key === itemEntry[0]) {
              map.set(key, itemEntry[1] + oldValue);
            }
          }
        }
      }
    }
    let mapEntriesArray = [];
    for (let entry of map.entries()) {
      mapEntriesArray.push(entry);
    }
    props.updateCalculateSum(mapEntriesArray);
  }, [props.cart, barInitValues]);

  useEffect(() => {
    let oldArray = props.updateItemSum;
    let objectArray = Object.values(barInitValues);
    if (oldArray) {
      for (var i = 0; i < oldArray.length; i++) {
        oldArray[i].push(objectArray[i]);
      }
      setbarData(oldArray);
    }
  }, [props.updateItemSum, barInitValues]);

  const updateBarValues = initObject => {
    setBarInitValues(initObject);
  };

  return (
    <div className="bar__panel">
      <CSSTransition
        in={props.showLimit}
        timeout={300}
        classNames="alert"
        unmountOnExit
      >
        <FormLimit updateBarValues={updateBarValues} />
      </CSSTransition>

      {barData.map((item, index) => (
        <div className="bar__item" key={index}>
          <span
            className="display__bar"
            style={{
              width: (item[1] / item[2]) * 100 + "%",
              background: `hsla(${
                ((item[1] / item[2]) * 100).toFixed(0) < 100
                  ? 100 - ((item[1] / item[2]) * 100).toFixed(0)
                  : 0
              },  70%, 50%, 1)`
            }}
          />
          <div className="bar__item-box">
            <p className="bar__text">{item[0]}</p>
            <p className="bar__text">{item[1].toFixed(0)}</p>{" "}
            <p className="bar__text">{item[2]}</p>
            <p className="bar__text">
              {((item[1] / item[2]) * 100).toFixed(0) + "%"}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = state => ({
  foods: state.foods,
  cart: state.cart,
  updateItemSum: state.updateItemSum
});

const mapDispatchToProps = {
  updateCalculateSum
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BarBox);

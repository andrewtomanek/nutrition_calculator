import React, { useState } from "react";
import { connect } from "react-redux";
import {
  applyFilterReset,
  applyFilterPicked,
  applyFilterWord,
  displayInformation
} from "../store/redux";
import database from "../data/db";

const Panel = props => {
  const [unFiltered, setUnFiltered] = useState(database);
  const [sortTypes, setSortTypes] = useState(Object.keys(database[0]));
  const [sortDirection, setDirection] = useState(["low", "high"]);
  const [selectedSortType, setSortString] = useState(1);
  const [selectedSortBy, setSortBy] = useState(1);

  const resetFilter = newArray => {
    setUnFiltered(newArray);
    props.applyFilterReset(unFiltered);
  };
  const filterPicked = sortString => {
    if (unFiltered < props.foods) setUnFiltered(props.foods);
    console.log(props.foods);
    props.applyFilterPicked(sortString);
  };
  const selectFilter = () => {
    let foodArray = [];
    let cartArray = [];
    if (selectedSortBy === "low") {
      foodArray = props.foods.sort((a, b) =>
        a[selectedSortType] > b[selectedSortType] ? 1 : -1
      );
      cartArray = props.cart.sort((a, b) =>
        a[selectedSortType] > b[selectedSortType] ? 1 : -1
      );
    } else if (selectedSortBy === "high") {
      foodArray = props.foods.sort((a, b) =>
        a[selectedSortType] < b[selectedSortType] ? 1 : -1
      );
      cartArray = props.cart.sort((a, b) =>
        a[selectedSortType] < b[selectedSortType] ? 1 : -1
      );
    }
    props.applyFilterWord([foodArray, cartArray]);
  };

  return (
    <div className="controls__panel">
      <button className="item__button" onClick={() => resetFilter(props.foods)}>
        Reset
      </button>
      <button className="item__button" onClick={() => filterPicked(true)}>
        picked
      </button>
      <button className="item__button" onClick={() => filterPicked(false)}>
        unpicked
      </button>
      <button className="item__button" onClick={() => selectFilter()}>
        Sort
      </button>
      <button
        className="item__button"
        onClick={() => props.displayInformation()}
      >
        Info
      </button>
      <select
        value={selectedSortType}
        onChange={e => setSortString(e.target.value)}
      >
        {sortTypes.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
      <select value={selectedSortBy} onChange={e => setSortBy(e.target.value)}>
        {sortDirection.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

const mapStateToProps = state => ({
  foods: state.foods,
  cart: state.cart
});

const mapDispatchToProps = {
  applyFilterReset,
  applyFilterPicked,
  applyFilterWord,
  displayInformation
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Panel);

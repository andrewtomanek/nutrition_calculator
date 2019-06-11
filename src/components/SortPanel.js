import React, { useState } from "react";
import { connect } from "react-redux";
import {
  applyFilterWord,
  displayInformation
} from "../store/actions/storageActions";
import database from "../data/db";

const SortPanel = props => {
  const [sortTypes] = useState(Object.keys(database[0]));
  const [sortDirection] = useState(["Nejnižší", "Nejvyšší"]);
  const [selectedSortType, setSortString] = useState("kalorie");
  const [selectedSortBy, setSortBy] = useState("Nejvyšší");

  const selectFilter = () => {
    let foodArray = [];
    let cartArray = [];
    if (selectedSortBy === "Nejnižší") {
      foodArray = props.foods.sort((a, b) =>
        a[selectedSortType] > b[selectedSortType] ? 1 : -1
      );
      cartArray = props.cart.sort((a, b) =>
        a[selectedSortType] > b[selectedSortType] ? 1 : -1
      );
    } else if (selectedSortBy === "Nejvyšší") {
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
      <button
        className="filter__button"
        onClick={() => props.displayInformation()}
      >
        Data
      </button>
      <select
        className="sort__select"
        value={selectedSortType}
        onChange={e => setSortString(e.target.value)}
      >
        {sortTypes.map((item, index) => (
          <option className="sort__option" key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
      <select
        className="sort__select"
        value={selectedSortBy}
        onChange={e => setSortBy(e.target.value)}
      >
        {sortDirection.map((item, index) => (
          <option className="sort__option" key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
      <button className="filter__button" onClick={() => selectFilter()}>
        Seřadit
      </button>
    </div>
  );
};

const mapStateToProps = state => ({
  foods: state.foods,
  cart: state.cart
});

const mapDispatchToProps = {
  applyFilterWord,
  displayInformation
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SortPanel);

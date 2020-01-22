import React, { useState } from "react";
import { connect } from "react-redux";
import {
  applyFilterWord,
  displayInformation
} from "../../store/actions/storageActions";
import {
  BasicButton,
  ControlPanel,
  SelectField,
  SelectOption
} from "../../styles/elements.js";

const SortPanel = props => {
  const [sortTypes] = useState([
    "bílkoviny",
    "cena",
    "kalorie",
    "množství",
    "sacharidy",
    "tuky",
    "vláknina"
  ]);
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
    <ControlPanel>
      <BasicButton onClick={() => props.displayInformation()}>Data</BasicButton>
      <SelectField
        value={selectedSortType}
        onChange={e => setSortString(e.target.value)}
      >
        {sortTypes.map((item, index) => (
          <SelectOption key={index} value={item}>
            {item}
          </SelectOption>
        ))}
      </SelectField>
      <SelectField
        value={selectedSortBy}
        onChange={e => setSortBy(e.target.value)}
      >
        {sortDirection.map((item, index) => (
          <SelectOption key={index} value={item}>
            {item}
          </SelectOption>
        ))}
      </SelectField>
      <BasicButton onClick={() => selectFilter()}>Seřadit</BasicButton>
    </ControlPanel>
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

export default connect(mapStateToProps, mapDispatchToProps)(SortPanel);

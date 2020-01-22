import React, { useState } from "react";
import { connect } from "react-redux";
import {
  applyFilterReset,
  applyFilterPicked,
  applyFilterWord,
  displayInformation
} from "../store/redux";
import database from "../../data/db.json";
import {BasicButton,ControlPanel,SelectField,SelectOption} from '../../styles/elements.js'

const Panel = props => {
  const [unFiltered, setUnFiltered] = useState(database);
  const [sortTypes] = useState([
    "bílkoviny",
    "cena",
    "kalorie",
    "množství",
    "sacharidy",
    "tuky",
    "vláknina"
  ]);
  const [sortDirection] = useState(["low", "high"]);
  const [selectedSortType, setSortString] = useState(1);
  const [selectedSortBy, setSortBy] = useState(1);

  const resetFilter = newArray => {
    setUnFiltered(newArray);
    props.applyFilterReset(unFiltered);
  };
  const filterPicked = sortString => {
    if (unFiltered < props.foods) setUnFiltered(props.foods);
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
    <ControlPanel>
      <BasicButton onClick={() => resetFilter(props.foods)}>
        Reset
      </BasicButton>
      <BasicButton onClick={() => filterPicked(true)}>
        picked
      </BasicButton>
      <BasicButton onClick={() => filterPicked(false)}>
        unpicked
      </BasicButton>
      <BasicButton onClick={() => selectFilter()}>
        Sort
      </BasicButton>
      <BasicButton
        onClick={() => props.displayInformation()}
      >
        Info
      </BasicButton>
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
      <SelectField value={selectedSortBy} onChange={e => setSortBy(e.target.value)}>
        {sortDirection.map((item, index) => (
          <SelectOption key={index} value={item}>
            {item}
          </SelectOption>
        ))}
      </SelectField>
    </ControlPanel>
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

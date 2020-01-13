import React, { useState } from "react";
import { connect } from "react-redux";
import {
  applyFilterReset,
  applyFilterPicked,
  applyFilterWord,
  displayInformation
} from "../store/redux";
import database from "../data/db";
import styled from "styled-components";

const ControlPanel = styled.div`
  display: grid;
  grid-auto-flow: column;
  background: hsla(24, 90%, 60%, 1);
`;

const SelectField = styled.select`
  font-family: "Alegreya Sans", monospace;
  height: 100%;
  width: 100%;
  padding: 0.2rem 0.3rem;
  font-size: 1rem;
  font-weight: 900;
  background-color: var(--green);
  color: #fff;
`;

const SelectOption = styled.option`
  height: 100%;
  width: 100%;
  padding: 0.3rem 1rem;
  font-size: 1rem;
  font-weight: 900;
  color: var(--green);
  background-color: #fff;
`;

const BasicButton = styled.button`
  padding: 0.3rem 1rem;
  font-size: 2rem;
  font-weight: 900;
  background-color: var(--green);
  color: #fff;
  z-index: 4;
  transition: all 200ms cubic-bezier(0.215, 0.61, 0.355, 1);
  &:hover {
    color: var(--green);
    background-color: white;
  }
  @media all and (max-width: 1680px) {
    font-size: 1.5rem;
  }
  @media all and (max-width: 980px) {
    font-size: 1.3rem;
  }
  @media all and (max-width: 736px) {
    font-size: 1.2rem;
  }
  @media all and (max-width: 480px) {
    font-size: 1.1rem;
  }
`;


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

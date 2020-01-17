import React, { useState } from "react";
import { connect } from "react-redux";
import {
  applyFilterReset,
  applyFilterPicked
} from "../../store/actions/storageActions";
import database from "../../data/db";
import { BasicButton, ControlPanel } from "../../styles/elements.js";

const FilterPanel = props => {
  const [unFiltered, setUnFiltered] = useState(database);

  const resetFilter = newArray => {
    setUnFiltered(newArray);
    props.applyFilterReset(unFiltered);
  };
  const filterPicked = sortString => {
    if (unFiltered < props.foods) setUnFiltered(props.foods);
    console.log(props.foods);
    props.applyFilterPicked(sortString);
  };

  return (
    <ControlPanel>
      <BasicButton onClick={() => resetFilter(props.foods)}>Reset</BasicButton>
      <BasicButton onClick={() => filterPicked(true)}>Označené</BasicButton>
      <BasicButton onClick={() => filterPicked(false)}>Ostatní</BasicButton>
    </ControlPanel>
  );
};

const mapStateToProps = state => ({
  foods: state.foods,
  cart: state.cart
});

const mapDispatchToProps = {
  applyFilterReset,
  applyFilterPicked
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterPanel);

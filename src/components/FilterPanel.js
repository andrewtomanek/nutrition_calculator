import React, { useState } from "react";
import { connect } from "react-redux";
import {
  applyFilterReset,
  applyFilterPicked
} from "../store/actions/storageActions";
import database from "../data/db";

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
    <div className="controls__panel">
      <button
        className="filter__button"
        onClick={() => resetFilter(props.foods)}
      >
        Reset
      </button>
      <button className="filter__button" onClick={() => filterPicked(true)}>
        Označené
      </button>
      <button className="filter__button" onClick={() => filterPicked(false)}>
        Ostatní
      </button>
    </div>
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterPanel);

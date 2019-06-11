import React, { useState } from "react";
import { connect } from "react-redux";
import { applycalculateSum } from "../store/actions/storageActions";
import database from "../data/db";

const CalculatePanel = props => {
  const [sumTypes] = useState(Object.keys(database[0]));
  const [selectedSumType, setSelectedSumType] = useState(1);
  const [sumResult, setSumResult] = useState(0);

  const calculateSum = () => {
    let sum = 0;
    for (let item of props.cart) {
      sum += item[selectedSumType];
    }
    setSumResult(sum);
    props.applycalculateSum(sum);
  };

  return (
    <div className="controls__panel">
      <button className="item__button" onClick={() => calculateSum()}>
        {sumResult !== 0 ? sumResult.toFixed(0) : "Spočítat"}
      </button>
      <select
        className="sort__select"
        value={selectedSumType}
        onChange={e => setSelectedSumType(e.target.value)}
      >
        {sumTypes.map((item, index) => (
          <option className="sort__option" key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

const mapStateToProps = state => ({
  foods: state.foods,
  cart: state.cart,
  allItemSum: state.allItemSum
});

const mapDispatchToProps = {
  applycalculateSum
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CalculatePanel);

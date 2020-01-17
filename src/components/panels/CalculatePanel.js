import React, { useState } from "react";
import { connect } from "react-redux";
import { applycalculateSum } from "../../store/actions/storageActions";
import database from "../../data/db";
import {BasicButton,ControlPanel,SelectField,SelectOption} from '../../styles/elements.js'

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
    <ControlPanel>
      <BasicButton onClick={() => calculateSum()}>
        {sumResult !== 0 ? sumResult.toFixed(0) : "Spočítat"}
      </BasicButton>
      <SelectField
        value={selectedSumType}
        onChange={e => setSelectedSumType(e.target.value)}
      >
        {sumTypes.map((item, index) => (
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
  cart: state.cart,
  allItemSum: state.allItemSum
});

const mapDispatchToProps = {
  applycalculateSum
};

export default connect(mapStateToProps, mapDispatchToProps)(CalculatePanel);

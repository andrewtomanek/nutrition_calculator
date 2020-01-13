import React, { useState } from "react";
import { connect } from "react-redux";
import { applycalculateSum } from "../store/actions/storageActions";
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

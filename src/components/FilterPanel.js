import React, { useState } from "react";
import { connect } from "react-redux";
import {
  applyFilterReset,
  applyFilterPicked
} from "../store/actions/storageActions";
import database from "../data/db";
import styled from "styled-components";

const ControlPanel = styled.div`
  display: grid;
  grid-auto-flow: column;
  background: hsla(24, 90%, 60%, 1);
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
      <BasicButton
        onClick={() => resetFilter(props.foods)}
      >
        Reset
      </BasicButton>
      <BasicButton onClick={() => filterPicked(true)}>
        Označené
      </BasicButton>
      <BasicButton onClick={() => filterPicked(false)}>
        Ostatní
      </BasicButton>
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterPanel);

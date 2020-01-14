import React from "react";
import CalculatePanel from "../components/CalculatePanel";
import styled from "styled-components";

const SwitchPanel = styled.div`
    width: 94%;
  display: grid;
  grid-auto-flow: column;
  justify-items: space-around;
  padding: 0.5rem 0.3rem;
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

export default function SwitcherPanel(props) {
  return (
    <SwitchPanel>
      {!props.cartControls ? (
        <>
          <BasicButton
            onClick={() => props.revealFilters()}
          >
            Vyfiltrovat
          </BasicButton>
          <BasicButton onClick={() => props.revealInput()}>
            Přidat
          </BasicButton>
          <BasicButton onClick={() => props.revealLimit()}>
            Limit
          </BasicButton>
        </>
      ) : (
        <>
          <CalculatePanel />
          <BasicButton onClick={() => props.revealLimit()}>
            Limit
          </BasicButton>
        </>
      )}
    </SwitchPanel>
  );
}

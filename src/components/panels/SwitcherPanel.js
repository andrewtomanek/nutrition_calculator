import React from "react";
import CalculatePanel from "./CalculatePanel";
import {BasicButton} from '../../styles/elements.js'
import styled from "styled-components";

const SwitchPanel = styled.div`
    width: 94%;
  display: grid;
  grid-auto-flow: column;
  justify-items: space-around;
  padding: 0.5rem 0.3rem;
  background: hsla(40,80%,70%,1);
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

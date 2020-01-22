import React from "react";
import styled from "styled-components";

const BarContainer = styled.div`
  display: grid;
  align-content: center;
  justify-content: center;
  grid: 1fr / 1fr;
  height: 4vh;
  width: 100%;
  z-index: 2;
  border-bottom: 0.2rem solid white;
  overflow: hidden;
`;

const BarTextBox = styled.div`
  display: grid;
  grid-auto-flow: column;
  align-content: center;
  justify-content: space-between;
  grid-area: 1 / 1 / 1 / 1;
  height: 100%;
  width: 100%;
  background-color: transparent;
  z-index: 2;
`;

const ColorBar = styled.span`
  display: grid;
  grid-area: 1 / 1 / 1 / 1;
  height: 100%;
  width: 0%;
  background-color: orange;
  transition: all 2s ease-in-out;
  z-index: 1;
`;

const BarLabel = styled.p`
  margin: 0;
  padding: 0.1rem 1rem;
  font-size: 1rem;
  font-weight: 900;
  color: #fff;
  background-color: transparent;
}
`;

export default function BarStripe({ item }) {
  return (
    <BarContainer>
      <ColorBar
        style={{
          width: (item[1] / item[2]) * 100 + "%",
          background: `hsla(${
            ((item[1] / item[2]) * 100).toFixed(0) < 100
              ? 100 - ((item[1] / item[2]) * 100).toFixed(0)
              : 0
          },  70%, 50%, 1)`
        }}
      />
      <BarTextBox>
        <BarLabel>{item[0]}</BarLabel>
        <BarLabel>{item[1].toFixed(0)}</BarLabel> <BarLabel>{item[2]}</BarLabel>
        <BarLabel>{((item[1] / item[2]) * 100).toFixed(0) + "%"}</BarLabel>
      </BarTextBox>
    </BarContainer>
  );
}

import React from "react";
import styled from "styled-components";

const TextBox = styled.div`
  display: grid;
  grid-auto-flow: row;
  align-content: center;
  justify-content: center;
  grid-area: 1 / 1 / 1 / 1;
  height: 100%;
  width: 100%;
  z-index: 2;
`;

const TextField = styled.p`
  margin: 0;
  padding: 0.3rem 1rem;
  font-size: 1rem;
  font-weight: 900;
  color: #fff;
  background-color: var(--orange);
  @media all and (max-width: 980px) {
    font-size: 1.3rem;
  }
  @media all and (max-width: 736px) {
    font-size: 1.5rem;
  }
  @media all and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export default function DataCard({ item, ...props }) {
  return (
    <TextBox onClick={() => props.pickItem(item.id)}>
      <TextField>Název: {item.image}</TextField>
      <TextField>Cena: {item.cena.toFixed(0)}</TextField>
      <TextField>Kalorie: {item.kalorie.toFixed(0)}</TextField>
      <TextField>Tuky: {item.tuky.toFixed(0)}</TextField>
      <TextField>Sacharidy: {item.sacharidy.toFixed(0)}</TextField>
      <TextField>Vláknina: {item.vláknina.toFixed(0)}</TextField>
      <TextField>Bílkoviny: {item.bílkoviny.toFixed(0)}</TextField>
      <TextField>Množství: {item.množství.toFixed(0)}</TextField>
    </TextBox>
  );
}

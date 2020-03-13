import React from "react";
import { SwitchButton, SwitchContainer } from "../../styles/elements.js";

export default function HidePanel({ hideCards, toggleCards }) {
  return (
    <SwitchContainer>
      <SwitchButton onClick={toggleCards}>
        {hideCards
          ? "\u{02191} Skrýt \u{02191}"
          : "\u{02193} Zobrazit \u{02193}"}
      </SwitchButton>
    </SwitchContainer>
  );
}

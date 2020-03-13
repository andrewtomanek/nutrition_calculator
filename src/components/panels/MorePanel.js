import React from "react";
import { SwitchButton, SwitchContainer } from "../../styles/elements.js";

export default function MorePanel({ displayMore }) {
  return (
    <SwitchContainer>
      <SwitchButton onClick={() => displayMore()}>
        &#8595; Více&#8595;
      </SwitchButton>
    </SwitchContainer>
  );
}

import React from "react";
import { BasicButton, InputContainer } from "../../styles/elements.js";

export default function MorePanel({ displayMore }) {
  return (
    <InputContainer>
      <BasicButton onClick={() => displayMore()}>Více</BasicButton>
    </InputContainer>
  );
}

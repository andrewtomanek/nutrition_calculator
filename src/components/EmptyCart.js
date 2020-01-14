import React from "react";
import styled from "styled-components";

const EmptyContainer = styled.div`
  display: grid;
  align-content: center;
  justify-content: center;
  background-color: var(--orange);
  border-radius: 1rem;
  padding: 1rem;
  min-width: 90vw;
  min-height: 20vh;
`;

const EmptyText = styled.p`
  display: grid;
  align-content: center;
  justify-content: center;
  background-color: var(--orange);
  border-radius: 1rem;
  padding: 1rem;
  min-width: 90vw;
  min-height: 20vh;
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

export default function EmptyCart({ resetFilter, showResetButton }) {
  return (
    <EmptyContainer>
      {showResetButton ? (
        <BasicButton onClick={() => resetFilter()}>
          Znovu
        </BasicButton>
      ) : (
        <EmptyText>Žádné položky</EmptyText>
      )}
    </EmptyContainer>
  );
}

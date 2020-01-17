import React from "react";
import DataCard from "./DataCard";
import ImageCard from "./ImageCard";
import ButtonPanel from "./panels/ButtonPanel";
import styled from "styled-components";

const CardContainer = styled.div`
  display: grid;
  grid: 2fr 1fr / 1fr;
  align-items: center;
  align-content: space-between;
  justify-content: space-between;
  background-color: var(--green);
  box-shadow: 0.1rem 0.1rem 0.1rem rgba(0, 0, 0, 0.15);
  border-radius: 0.3rem;
  height: 100%;
  width: 100%;
`;

const CardBox = ({ item, basicButtons, ...props }) => {
  return (
    <CardContainer>
      <DataCard item={item} {...props} />
      <ImageCard item={item} />
      <ButtonPanel item={item} basicButtons={basicButtons} {...props} />
    </CardContainer>
  );
};

export default CardBox;

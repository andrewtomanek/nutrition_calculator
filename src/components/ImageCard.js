import React from 'react'
import styled from "styled-components";

function importAll(r) {
    let images = {};
    r.keys().map(item => {
      return (images[item.replace("./", "")] = r(item));
    });
    return images;
  }
  
  const images = importAll(
    require.context("../../public/img/cont", false, /\.(png|jpe?g|svg)$/)
  );

  
  export default function ImageCard({item}) {
    const PictureContainer = styled.div`
    z-index: ${() => item.picked ? "1" : "3"};
    grid-area: 1 / 1 / 3 / 1;
  width: 100%;
  height: 100%;
  overflow: hidden;
  `;
  
  const PictureCard = styled.img`
    filter: ${() =>item.picked ? "hue-rotate(180deg)" : ""};  
    height: 70%;
  width: 140%;
  transform: translateX(-20%);
  `;

    return (
        <PictureContainer>
        <PictureCard
          src={images[item.image + ".jpg"]}
          alt={item.image}
        />
      </PictureContainer>
    )
}

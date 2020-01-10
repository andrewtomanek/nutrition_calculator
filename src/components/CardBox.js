import React from "react";
import DataCard from "./DataCard";
import ImageCard from "./ImageCard";
import ButtonPanel from "./ButtonPanel";

const CardBox = ({ item, basicButtons, ...props }) => {
  return (
    <div className="item__container">
      <DataCard item={item} {...props} />
      <ImageCard item={item} />
      <ButtonPanel item={item} basicButtons={basicButtons} {...props} />
    </div>
  );
};

export default CardBox;

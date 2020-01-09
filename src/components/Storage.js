import React from "react";
import ItemCard from "./ItemCard";
import ImageCard from "./ImageCard";
import ButtonPanel from "./ButtonPanel";

const Storage = ({ item, ...props }) => {
  return (
    <div className="item__container">
      <ItemCard item={item} {...props} />
      <ImageCard item={item}/>
      <ButtonPanel item={item} {...props} />
    </div>
  );
};

export default Storage;

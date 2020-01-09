import React from 'react'

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
    return (
        <div className={item.picked ? "pic__box" : "pic__box picked__box"}>
        <img
          className={item.picked ? "item__pic picked__pic" : "item__pic"}
          //  style={{ filter: item.picked ? "" : "hue-rotate(180deg)" }}
          src={images[item.image + ".jpg"]}
          alt={item.image}
        />
      </div>
    )
}

import React from 'react'

export default function DataCard({item, ...props}) {
    return (
        <div className="text__box" onClick={() => props.pickItem(item.id)}>
        <p className="item__text">Název: {item.image}</p>
        <p className="item__text">Cena: {item.cena.toFixed(0)}</p>
        <p className="item__text">Kalorie: {item.kalorie.toFixed(0)}</p>
        <p className="item__text">Tuky: {item.tuky.toFixed(0)}</p>
        <p className="item__text">Sacharidy: {item.sacharidy.toFixed(0)}</p>
        <p className="item__text">Vláknina: {item.vláknina.toFixed(0)}</p>
        <p className="item__text">Bílkoviny: {item.bílkoviny.toFixed(0)}</p>
        <p className="item__text">Množství: {item.množství.toFixed(0)}</p>
      </div>
    )
}

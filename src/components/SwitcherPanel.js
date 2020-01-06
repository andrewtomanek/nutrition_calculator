import React from "react";
import CalculatePanel from "../components/CalculatePanel";

export default function SwitcherPanel(props) {
  return (
    <div className="switch__panel">
      {!props.cartControls ? (
        <>
          <button
            className="item__button"
            onClick={() => props.revealFilters()}
          >
            Vyfiltrovat
          </button>
          <button className="item__button" onClick={() => props.revealInput()}>
            Přidat
          </button>
          <button className="item__button" onClick={() => props.revealLimit()}>
            Limit
          </button>
        </>
      ) : (
        <>
          <CalculatePanel />
          <button className="item__button" onClick={() => props.revealLimit()}>
            Limit
          </button>
        </>
      )}
    </div>
  );
}

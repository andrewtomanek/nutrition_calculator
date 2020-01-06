import React from 'react'

export default function SwitcherPanel(props) {
    return (
        <div className="switch__panel">
        <button
          className="item__button"
          onClick={() =>props.revealFilters()}
        >
          Vyfiltrovat
        </button>{" "}
        <button
          className="item__button"
          onClick={() => props.revealInput()}
        >
          Přidat
        </button>{" "}
        <button
          className="item__button"
          onClick={() => props.revealLimit()}
        >
          Limit
        </button>
      </div>
    )
}

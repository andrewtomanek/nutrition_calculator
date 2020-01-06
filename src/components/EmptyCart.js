import React from 'react'

export default function EmptyCart({resetFilter}) {
    return (
        <div className="empty__cart">
        {" "}
        <button
          className="filter__button"
          onClick={() => resetFilter()}
        >
          Znovu
        </button>
      </div>
    )
}

import React from "react";

export default function EmptyCart({ resetFilter, showResetButton }) {
  return (
    <div className="empty__cart">
      {showResetButton ? (
        <button className="filter__button" onClick={() => resetFilter()}>
          Znovu
        </button>
      ) : (
        <p className="empty__text">Žádné položky</p>
      )}
    </div>
  );
}

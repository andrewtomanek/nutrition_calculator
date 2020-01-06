import React from 'react'

export default function MorePanel({displayMore}) {
    return (
        <div className="more__panel">
        <button className="item__button" onClick={() => displayMore()}>
          Více
        </button>
      </div>
    )
}

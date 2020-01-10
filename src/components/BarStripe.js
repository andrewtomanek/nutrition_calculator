import React from 'react'

export default function BarStripe({item}) {
    return (
        <div className="bar__item" >
        <span
          className="display__bar"
          style={{
            width: (item[1] / item[2]) * 100 + "%",
            background: `hsla(${
              ((item[1] / item[2]) * 100).toFixed(0) < 100
                ? 100 - ((item[1] / item[2]) * 100).toFixed(0)
                : 0
            },  70%, 50%, 1)`
          }}
        />
        <div className="bar__item-box">
          <p className="bar__text">{item[0]}</p>
          <p className="bar__text">{item[1].toFixed(0)}</p>{" "}
          <p className="bar__text">{item[2]}</p>
          <p className="bar__text">
            {((item[1] / item[2]) * 100).toFixed(0) + "%"}
          </p>
        </div>
      </div>
    )
}

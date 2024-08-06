import React from "react";
import {
  BsTriangleFill,
  BsCaretDownFill,
  BsFillArchiveFill,
} from "react-icons/bs";

function CardItem({ title, number, percentage, trend = "down" }) {
  return (
    <div className="card">
      <div className="card-inner">
        <BsFillArchiveFill className="card_icon" />
        <h3>{title}</h3>
      </div>
      <div className="num-percentage">
        <h1>{number}</h1>
        <div className={"icon-percentage-" + trend}>
          {trend === "up" ? (
            <BsTriangleFill className="icon" />
          ) : (
            <BsCaretDownFill className="icon" />
          )}
          <p>{percentage}</p>
        </div>
      </div>
    </div>
  );
}

export default CardItem;

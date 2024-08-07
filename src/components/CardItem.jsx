import React from "react";
import { BsTriangleFill, BsCaretDownFill } from "react-icons/bs";

function CardItem({ icon, title, number, percentage, trend = "down" }) {
  return (
    <div className="card">
      <div className="card-inner">
        {icon}
        <h3>{title}</h3>
      </div>
      <div className="num-percentage">
        <p>{number}</p>
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

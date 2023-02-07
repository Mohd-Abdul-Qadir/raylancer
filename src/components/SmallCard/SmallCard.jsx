import React from "react";
import "./SmallCard.scss";

const SmallCard = (props) => {
  return (
    <>
      <div className="small-card-container">
        <div
          className="background-blur"
          style={{ backgroundColor: props.color }}
        ></div>
        <img src={`/icons/${props.icon}`} />
        <div className="content">
          <span>{props.heading}</span>
          <span>{props.subHeading}</span>
          <span>{props.amount}</span>
        </div>
      </div>
    </>
  );
};

export default SmallCard;

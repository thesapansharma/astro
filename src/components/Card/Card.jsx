import React from "react";
import "./Card.css";

const Card = ({emoji, heading, detail,price, color}) => {
  return (
    <div className="card" style={{borderColor: {color}}}> 
      <img height={'170px'} src={emoji} alt="" />
      <span>{heading}</span>
      <span>{detail}</span>
      <span>Price: {price}</span>
      <a href="/checkout"><button className="c-button">BUY NOW</button></a>
    </div>
  );
};

export default Card;

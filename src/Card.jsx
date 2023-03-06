import React from "react";
import "./Card.css";
const Card = ({ img, year, make, model, price }) => {
  return (
    <div className="CardContainer">
      <div className="image">
        <img src={img} alt={model} width="100%" />
      </div>
      <div className="details">
        {" "}
        <h3>Make : {make}</h3>
        <p>Model: {model}</p>
        <p>Year : {year}</p>
        <p>Price : {price} </p>
      </div>
    </div>
  );
};
export default Card;

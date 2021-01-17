import React from "react";
import { useHistory } from "react-router-dom";
import "./Card.css";
function Card({ name, type, price, discountPercentage, imgUrl }) {
  const history = useHistory();
  const goToDetails = () => {
    history.push("/product");
  };
  return (
    <div className="card" onClick={goToDetails}>
      <img src={imgUrl} alt={name} className="card--image" />
      <h5>{type}</h5>
      <h6>{name}</h6>
      <div>
        <p>{price}</p>
        <span>{discountPercentage}</span>
      </div>
    </div>
  );
}

export default Card;

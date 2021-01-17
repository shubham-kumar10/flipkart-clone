import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import "./Card.css";
import { addItem } from "./features/cartSlice";
function Card({ id, name, type, price, discountPercentage, imgUrl }) {
  const history = useHistory();
  const dispatch = useDispatch();
  // const goToDetails = () => {
  //   history.push({
  //     pathname: `/product/${id}`,
  //   });
  // };
  const addToCart = () => {
    dispatch(
      addItem({
        id,
        name,
        type,
        price,
        discountPercentage,
        imgUrl,
      })
    );
    history.push("/cart");
  };
  return (
    <div className="card">
      <img src={imgUrl} alt={name} className="card--image" />
      <h5>{type}</h5>
      <h6>{name}</h6>
      <div>
        <p>{price}</p>
        <span>{discountPercentage}</span>
      </div>
      <button onClick={addToCart}>Add to Card</button>
    </div>
  );
}

export default Card;

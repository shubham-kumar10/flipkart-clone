import React from "react";
import "./CartItem.css";
function CartItem({
  name,
  price,
  imgUrl,
  hasDiscount,
  discountPercent,
  seller,
  deliveryTime,
  deliveryCost,
  qty,
}) {
  const addQty = () => {};
  const decreaseQty = () => {};
  return (
    <div className="cartItem">
      <section className="cartItem--image">
        <img src={imgUrl} alt={name} />
      </section>
      <section className="cartItem--details">
        <h3>{name}</h3>
        <h4>Seller : {seller}</h4>
        <h4 className="">{discountPercent * 0.01 * price}</h4>
        <h5>{price}</h5>
      </section>
      <section className="cartItem--actions">
        <button onClick={addQty}>+</button>
        <p className="cartItem--action-text">{qty}</p>
        <button onClick={decreaseQty}>-</button>
      </section>
    </div>
  );
}

export default CartItem;

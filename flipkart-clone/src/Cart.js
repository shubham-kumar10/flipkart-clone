import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import { getCartItems } from "./features/cartSlice";

function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector(getCartItems);
  console.log(cartItems);
  return (
    <div>
      {cartItems.map((item) => (
        <CartItem
          name={item.name}
          price={item.price}
          imgUrl={item.imgUrl}
          hasDiscount={item.hasDiscount}
          discountPercent={item.discountPercent}
          seller={item.seller}
          deliveryTime={item.deliveryTime}
          deliveryCost={item.deliveryCost}
          qty={1}
        />
      ))}
    </div>
  );
}

export default Cart;

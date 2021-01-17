import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { addItem } from "./features/cartSlice";

function ProductSection({ product }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const addToCartClicked = () => {
    dispatch(addItem(product));
    history.push("/cart");
  };
  return (
    <div>
      <section>
        <img src={product.imgUrl} alt={product.Name} />
        <button onClick={addToCartClicked}>Add to Cart</button>
        <button>Buy Now</button>
      </section>
      <section></section>
    </div>
  );
}

export default ProductSection;

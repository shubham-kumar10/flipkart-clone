import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation, useParams } from "react-router-dom";
import { addItem } from "./features/cartSlice";
import { getProduct, setProduct } from "./features/productSlice";

function ProductSection() {
  const id = useParams();
  console.log(id);
  const dispatch = useDispatch();
  const product = useSelector(getProduct);
  console.log(product);
  const history = useHistory();
  const addToCartClicked = () => {
    dispatch(addItem(product));
    history.push("/cart");
  };
  return (
    <div>
      <section>
        {product && <img src={product.imgUrl} alt={product.name} />}
        <button onClick={addToCartClicked}>Add to Cart</button>
        <button>Buy Now</button>
      </section>
      <section></section>
    </div>
  );
}

export default ProductSection;

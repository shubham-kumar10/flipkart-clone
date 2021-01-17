import React from "react";

function ProductSection({ product }) {
  return (
    <div>
      <section>
        <img src={product.imgUrl} alt={product.Name} />
        <button>Add to Cart</button>
        <button>Buy Now</button>
      </section>
      <section></section>
    </div>
  );
}

export default ProductSection;

import React from "react";
import Product from "./Product";

const Products = ({products}) => {
    // console.log(products);
  return (
    <div className="my-16">
      <div className="text-center">
        <h1 class="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-teal-500 md:text-4xl text-2xl font-black">
          Products
        </h1>
        <p>A sport from other leisure activities varies between sources. </p>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
        {
           products.slice(0,6).map(product => <Product product={product}></Product>)
        }
      </div>
    </div>
  );
};

export default Products;

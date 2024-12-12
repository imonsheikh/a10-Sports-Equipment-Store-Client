import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const ProductDetails = () => {
  const singleLoadedData = useLoaderData();
  console.log(singleLoadedData);
  const {
    _id,
    image,
    itemName,
    categoryName,
    price,
    description,
    processingTime,
    rating,
    stockStatus,
    extraGrip,
    hitPaper,
  } = singleLoadedData;

  return (
    <section className="flex justify-center items-center bg-white font-lato">
      <div className="py-20 md:py-8 md:w-[90%] w-full max-w-[76.5rem] mx-auto text-[#111]">
        <div className="container mt-10 grid gap-8 grid-cols-[repeat(auto-fit,minmax(16rem,1fr))]">
          <div className="card">
            <div className="card-inner relative w-full h-[13.75rem] bg-white rounded-2xl overflow-hidden">
              <div className="box w-full h-full bg-white rounded-2xl overflow-hidden">
                <div className="imgBox absolute inset-0">
                  <img
                    className="w-full h-full object-cover"
                    src={image}
                    alt="equipment img"
                  />
                </div>
                <div className="icon absolute bottom-[-0.375rem] right-[-0.375rem] w-24 h-24 bg-[#d3b19a] rounded-tl-full flex justify-center items-center transition-transform hover:scale-110">
                  <Link className="iconBox w-full h-full flex justify-center items-center text-white text-2xl rounded-full">
                    <span className="material-symbols-outlined"></span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="py-4 px-2.5 text-start">
              <h3 className="capitalize text-xl">
                <span className="font-bold text-slate-800">ItemName:</span>
                {itemName}
              </h3>
              <h3>
                <span className="font-bold text-slate-800">CategoryName:</span>{" "}
                {categoryName}
              </h3>
              <p className="my-4 text-[#565656]">
                <span className="font-bold">Description: </span>
                {description}
              </p>
              <ul className="flex flex-wrap gap-2">
                <li className="uppercase font-bold text-lg text-[#282828] bg-[#d3b19a] px-2 py-1 rounded">
                  price: {price}
                </li>
                <li className="uppercase font-bold text-md  bg-lime-600 px-2 py-1 rounded text-white">
                  processingTime:
                  {processingTime}
                </li>
              </ul>
              <h1>
                <span className="font-bold text-slate-800">Rating:</span>{" "}
                {rating}
              </h1>
              <h1>
                <span className="font-bold text-slate-800">Stock status:</span>:{" "}
                {stockStatus}
              </h1>
              <p>
                {" "}
                <span className="font-bold text-slate-800">
                  Extra Grip:
                </span>: {extraGrip ? 1 : 0}
              </p>
              <p>
                {" "}
                <span className="font-bold text-slate-800">
                  Hit Paper:
                </span>: {hitPaper ? 1 : 0}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;

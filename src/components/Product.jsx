import React from 'react';

const Product = ({product}) => {

    const {_id, image,itemName,categoryName, price,description,rating,processingTime,stockStatus} = product

    return (
       /* From Uiverse.io by Yaya12085 */ 
<div className="relative flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md mt-20 border-2">
  <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 border">
  <img className='w-full' src={image} alt="image" />
  </div>
  <div className="p-6 border-">
    <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
     {itemName}
    </h5>
    <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
     {price}
    </h5>
    <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
    {description} 
    </p>
  </div>
  <div className="p-6 pt-0">
    <button data-ripple-light="true" type="button" className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
      Details
    </button>
  </div>
</div>
    );
};

export default Product;
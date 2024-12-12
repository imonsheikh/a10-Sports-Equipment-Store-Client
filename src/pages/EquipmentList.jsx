import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const EquipmentList = () => {

    const loadedEquipments = useLoaderData()
    
    const [equipments,setEquipments] = useState(loadedEquipments)

    return (
        <div className='flex mx-auto justify-between flex-wrap gap-1'>

         {
          equipments.map(equipment => (
            <div className="md:w-1/3 lg:w-2/12 flex-auto  w-full flex flex-col items-center justify-center  border-2 rounded-xl sm:flex-row   ">
            <div className="w-full  overflow-hidden rounded-lg bg-white shadow-md duration-300 text-start ">
               <img src={equipment?.image} alt="image" />
              <h1 className="mt-2  text-lg font-normal text-gray-500 ml-2">
                <span className='font-bold mr-1'>Name:</span>
                {equipment?.itemName}</h1>
              <h1 className=" text-lg font-normal text-gray-500 ml-2">
                <span className='font-bold mr-1'>Price:</span>
                {equipment?.price}</h1>
              <p className="my-1  text-sm text-gray-500 ml-2">
                <span className='font-bold mr-1'>Description:</span>
                {equipment?.description}</p>
              <div className="space-x-4 bg-gray-100 py-4 text-center">
                <button className="inline-block rounded-md bg-red-500 px-10 py-2 font-semibold text-red-100 shadow-md duration-75 hover:bg-red-400">Delete</button>
                <Link to={`/update/${equipment?._id}`} className="inline-block rounded-md bg-green-500 px-4 py-2 font-semibold text-green-100 shadow-md duration-75 hover:bg-green-400">Update</Link>
              </div>
            </div>
          </div>
          ))
         }


        </div>
    );
};

export default EquipmentList;
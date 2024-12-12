import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const EquipmentList = () => {

    const loadedEquipments = useLoaderData()
    
    const [equipments,setEquipments] = useState(loadedEquipments)

    return (
        <div className='flex mx-auto justify-between flex-wrap gap-1'>

         {
          equipments.map(equipment => (
            <div className="md:w-1/3 lg:w-2/12 flex-auto  w-full flex flex-col items-center justify-center  border-2 rounded-xl sm:flex-row   ">
            <div className="w-full  overflow-hidden rounded-lg bg-white shadow-md duration-300">
               
              <h1 className="mt-2 text-center text-2xl font-bold text-gray-500">Success</h1>
              <p className="my-4 text-center text-sm text-gray-500">Woah, successfully completed 3/5 Tasks</p>
              <div className="space-x-4 bg-gray-100 py-4 text-center">
                <button className="inline-block rounded-md bg-red-500 px-10 py-2 font-semibold text-red-100 shadow-md duration-75 hover:bg-red-400">Delete</button>
                <button className="inline-block rounded-md bg-green-500 px-4 py-2 font-semibold text-green-100 shadow-md duration-75 hover:bg-green-400">Update</button>
              </div>
            </div>
          </div>
          ))
         }


        </div>
    );
};

export default EquipmentList;
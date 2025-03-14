import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const EquipmentList = () => {

    const loadedEquipments = useLoaderData()
    
    const [equipments,setEquipments] = useState(loadedEquipments)

    const handleDelete = (id) => {
      // console.log('dd', id);
      
          //sweet alert
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // console.log("Delete confirmed");
        fetch(`https://sports-equipments-store-server-v2.vercel.app/allEquipments/${id}`,{
            method: 'DELETE'
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("deleted hoiche",data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "this Equipment has been deleted.",
                icon: "success",
              });

              const reamining = equipments.filter(equipment => equipment._id !== id)
              setEquipments(reamining)

            }
          });
      }
    });
    }


    return (
        <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-1 my-10'>

         {
          equipments.map(equipment => (
            <div
             key={equipment._id}
            className="items-center border-2 rounded-xl    ">
            <div className="w-full  overflow-hidden rounded-lg bg-white shadow-md duration-300 text-start ">
              <div className='h-40'>
              <img className='w-full h-full' src={equipment?.image} alt="image" />
              </div>
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
                <button 
                onClick={() => handleDelete(equipment?._id)}
                className="inline-block rounded-md bg-red-500 px-4 md:px-8 md:py-2 py-1 font-semibold text-red-100 shadow-md duration-75 hover:bg-red-400 md:text-lg text-sm">Delete</button>
                <Link to={`/update/${equipment?._id}`} className="inline-block rounded-md bg-green-500 md:px-8 px-4 md:py-2 py-1 md:text-lg text-sm font-semibold text-green-100 shadow-md duration-75 hover:bg-green-400">Update</Link>
              </div>
            </div>
          </div>
          ))
         }


        </div>
    );
};

export default EquipmentList;
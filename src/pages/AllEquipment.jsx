import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const AllEquipment = () => {

    const loadedAllEquipments = useLoaderData()
    const [equipments,setEquipments] = useState(loadedAllEquipments)

    
const TdStyle = {
    ThStyle: `w-1/6 max-w-[160px] border-l border-transparent md:py-4 md:px-3 py-2 px-1 md:text-lg text-sm font-medium text-white lg:py-7 lg:px-4`,
    TdStyle: `text-dark border-b border-l border-[#E8E8E8] bg-[#F3F6FF] dark:bg-dark-3 dark:border-dark dark:text-dark-7 py-5 px-2 text-center md:text-base font-medium`,
    TdStyle2: `text-dark border-b border-[#E8E8E8] bg-white dark:border-dark dark:bg-dark-2 dark:text-dark-7 md:py-5 py-2 md:px-2 px-1 text-center md:text-base text-sm font-medium`,
    TdButton: `inline-block md:px-6 md:py-2.5 px-1 py-1 border rounded-md border-primary text-primary hover:bg-primary hover:text-white md:font-medium font-md text-xs md:text-lg`,
  }

  const handleSortingAsc = () => {
    const sortAsc = equipments.sort((a, b) => a.price-b.price)
    console.log('clicked');
    setEquipments([...sortAsc])
    // console.log(sort); 
  }
  const handleSortingDsc = () => {
    const sortDsc = equipments.sort((a, b) => b.price-a.price)
    console.log('clicked');
    setEquipments([...sortDsc])
    // console.log(sort); 
  }
  

    return (
        <section className='bg-white dark:bg-dark py-20 lg:py-[60px]'>
        <div className='flex gap-7'>
        <button 
          onClick={handleSortingAsc}
          className='flex btn btn-md md:px-8 mb-4 btn-primary text-white md:text-xl'>sort(Ascending)</button>
          <button 
          onClick={handleSortingDsc}
          className='flex btn btn-md px-8 mb-4 btn-primary text-white md:text-xl'>sort(Descending)</button>
        </div>
        <div className='container'>
          <div className='flex flex-wrap -mx-4'>
            <div className='w-full '>
              <div className='max-w-full overflow-x-auto'>
                <table className='w-full table-auto'>
                  <thead className='text-center bg-slate-600'>
                    <tr>
                      <th className={TdStyle.ThStyle}> Item No: </th>
                      <th className={TdStyle.ThStyle}> Item Name: </th>
                      <th className={TdStyle.ThStyle}> Category: </th>
                      <th className={TdStyle.ThStyle}> Price: </th>
                      <th className={TdStyle.ThStyle}> </th>
                    </tr>
                  </thead>
  
                  <tbody>
                   {equipments.map((equipment,index) =>   <tr>
                      <td className={TdStyle.TdStyle}>{index + 1}</td>
                      <td className={TdStyle.TdStyle2}>{equipment?.itemName}</td>
                      <td className={TdStyle.TdStyle}>{equipment?.categoryName}</td>
                      <td className={TdStyle.TdStyle2}>{equipment?.price}</td>
                      <td className={TdStyle.TdStyle2}>
                        <Link to={`/productDetails/${equipment?._id}`} className={TdStyle.TdButton}>
                          View Details
                        </Link>
                      </td>
                    </tr>)}
          
       
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default AllEquipment;
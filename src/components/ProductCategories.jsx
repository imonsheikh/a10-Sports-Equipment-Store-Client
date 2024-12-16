import React from 'react';
import { BiBasketball, BiCricketBall, BiTennisBall } from 'react-icons/bi';
import { IoIosFootball } from 'react-icons/io';
import { MdOutlineSportsCricket } from 'react-icons/md';
import { SiAircall } from 'react-icons/si';
import { NavLink } from 'react-router-dom';

import bat from '../assets/icons8-badminton-50.png'
import { GiCricket, GiCricketBat } from 'react-icons/gi';

const ProductCategories = () => {
    return (
        <div className='text-stone-00'> 
                  <div className='mt-10 text-center'>
        <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-teal-500 md:text-4xl text-2xl font-black">
          Products Categories
        </h1>
        <p>The precise definition of what differentiates a sport from other leisure activities varies between sources. </p>
      </div>

      <div className='flex justify-between items-center mt-10 font-bold text-2xl gap-5 flex-wrap text-center'>
        <NavLink className='border-2 border-blue-300 p-5 rounded-lg space-y-2 flex-1'>
            <SiAircall className='mx-auto w-14 h-14 border rounded-full p-1' />
            <h1>All</h1>
        </NavLink>
        <NavLink  className='flex-1 border-2 border-blue-300 p-5 rounded-lg space-y-2'>
            <IoIosFootball className='mx-auto w-14 h-14 border rounded-full p-1' />
            <h1>Football</h1>
        </NavLink>
        <NavLink className='flex-1 border-2 border-blue-300 p-5 rounded-lg space-y-2'>
            <BiBasketball className='mx-auto w-14 h-14 border rounded-full p-1' />
            <h1>BasletBall</h1>
        </NavLink>
        <NavLink className='flex-1 border-2 border-blue-300 p-5 rounded-lg space-y-2'>
            <BiTennisBall className='mx-auto w-14 h-14 border rounded-full p-1' />
            <h1>Tennis</h1>
        </NavLink>
        <NavLink className='flex-1 border-2 border-blue-300 p-5 rounded-lg space-y-2'>
            <GiCricketBat className='mx-auto w-14 h-14 border rounded-full p-1' />
            <h1>Cricket</h1>
        </NavLink>          
        <NavLink className='flex-1 border-2 border-blue-300 p-5 rounded-lg space-y-2'>
            <img className='mx-auto w-14 h-14 border rounded-full p-3'src={bat} />
            <h1>Batminton</h1>
        </NavLink>
    
       
      </div>

        </div>
    );
};

export default ProductCategories;
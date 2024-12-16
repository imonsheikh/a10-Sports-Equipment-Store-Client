import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo2.png'
import { AuthContext } from '../provider/AuthProvider';
import { FaUserCircle } from 'react-icons/fa';
import DarkMode from './DarkMode';

import { Tooltip as ReactTooltip} from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'


const Navbar = () => {

    const {user, handleLogout} = useContext(AuthContext)
    // console.log(user);

    const profile = user?.email?.charAt(0).toUpperCase() 
    

    const links = <>
    <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to='/allEquipments'>All Sports Equipment</NavLink></li>
    <li><NavLink to='/addEquipment'>Add Equipment</NavLink></li>
    <li><NavLink to='/equipmentList'>My Equipment List</NavLink></li>
   </>

    return (
        <div className="navbar bg-indigo-300 text-white">
        <div className="navbar-start">
          <div className="dropdown ">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-indigo-400 rounded-box z-[10] mt-3 w-52 p-2 shadow">
             {links}
            </ul>
          </div>
          <img className='md:w-12 md:h-12 w-10 h-10 md:border-4 border p-1 rounded-full border-sky-500' src={logo} alt="" />
          <a className="md:text-xl text-sm ml-1 font-bold"
         
  >Sports King</a>
     
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {links}
          </ul>
        </div>
        <div className="navbar-end">
          <DarkMode></DarkMode>
          {
            user?
            (   
                <div className='flex md:gap-4 gap-1 items-center'>
            
                 {user?.photoURL?  <img 
                  data-tooltip-id="my-tooltip"
                  data-tooltip-variant='info'
                  data-tooltip-content={user?.displayName}
                  // data-tooltip-html="<img>{user?.photoURL}</img>"
                  data-tooltip-place="bottom" 
                 className='md:w-14 md:h-14 w-10 h-10 rounded-full md:border-4 border-2 border-blue-500' src={user?.photoURL} alt="img" /> : <p className='md:w-14 md:h-14 w-10 h-10 rounded-full bg-red-700 md:border-4 border-2 border-blue-500 items-center flex justify-center text-xl'>{profile}</p>
                 
                 }
                    <ReactTooltip
                  id='my-tooltip'
                  ></ReactTooltip>
                  <Link onClick={handleLogout} className='btn md:btn-md btn-sm btn-success text-white'>Logout</Link>
                </div>
            ) : 
            (
              <div className='flex gap-2 items-center justify-center'>
                <Link to='/register' className="btn md:btn-md btn-xs bg-green-400 text-white">Register</Link>
                <Link to='/login' className="btn md:btn-md btn-xs btn-primary items-center">Login</Link>
              </div>
            )
          }
       
        </div>
      </div>
    );
};

export default Navbar;
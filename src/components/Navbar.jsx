import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo2.png'
import { AuthContext } from '../provider/AuthProvider';
import { FaUserCircle } from 'react-icons/fa';

const Navbar = () => {

    const {user, handleLogout} = useContext(AuthContext)
    console.log(user);
    

    const links = <>
    <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to='/addEquipment'>Add Equipment</NavLink></li>
    <li><NavLink to='/allEquipments'>All Equipment</NavLink></li>
    <li><NavLink to='/equipmentList'>Equipment List</NavLink></li>
   </>

    return (
        <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
             {links}
            </ul>
          </div>
          <img className='w-12 h-12 border-4 p-1 rounded-full border-sky-500' src={logo} alt="" />
          <a className="btn btn-ghost text-2xl font-bold">Sports King</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {links}
          </ul>
        </div>
        <div className="navbar-end">
          {
            user?
            (   
                <div className='flex gap-4'>
                 {user?.photoURL?  <img className='w-14 h-14 rounded-full border-4 border-blue-500' src={user?.photoURL} alt="img" /> : <FaUserCircle className='' />}
                  <Link onClick={handleLogout} className='btn btn-success text-white'>Logout</Link>
                </div>
            ) : 
            (
              <div>
                <Link to='/register' className="btn bg-green-400 text-white">Register</Link>
                <Link to='/login' className="btn btn-primary">Login</Link>
              </div>
            )
          }
       
        </div>
      </div>
    );
};

export default Navbar;
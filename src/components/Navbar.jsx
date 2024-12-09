import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo2.png'

const Navbar = () => {

    const links = <>
    <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to='/allEquipments'>All Equipment</NavLink></li>
    <li><NavLink to='/addEquipment'>Add Equipment</NavLink></li>
    <li><NavLink to='/extra'>expra</NavLink></li>
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
          <img className='w-12 h-12' src={logo} alt="" />
          <a className="btn btn-ghost text-xl">Sports</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {links}
          </ul>
        </div>
        <div className="navbar-end">
          <Link className="btn bg-green-400 text-white">Register</Link>
          <Link className="btn btn-primary">Login</Link>
        </div>
      </div>
    );
};

export default Navbar;
import React from 'react';
import { NavLink } from 'react-router-dom';
import { assets } from '../assets/assets';

const Sidebar = () => {
  return (
    <div className='w-[18%] min-h-screen border-r-2 bg-white shadow-md'>
      <div className='flex flex-col gap-4 pt-6 pl-[20%] text-[15px]'>

        {/* Add Gigs */}
        <NavLink 
          to="/add" 
          className={({ isActive }) => 
            `flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l transition-all duration-200 ${isActive ? 'bg-gray-200 font-semibold' : 'hover:bg-gray-100'}`
          }
        >
          <img className='w-5 h-5' src={assets.add_icon} alt="Add Icon" />
          <p className='hidden md:block'>Add Gigs</p>
        </NavLink>

        {/* List */}
        <NavLink 
          to="/list" 
          className={({ isActive }) => 
            `flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l transition-all duration-200 ${isActive ? 'bg-gray-200 font-semibold' : 'hover:bg-gray-100'}`
          }
        >
          <img className='w-5 h-5' src={assets.list_icon || assets.order_icon} alt="List Icon" />
          <p className='hidden md:block'>List</p>
        </NavLink>

        {/* Ongoing */}
        <NavLink 
          to="/orders" 
          className={({ isActive }) => 
            `flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l transition-all duration-200 ${isActive ? 'bg-gray-200 font-semibold' : 'hover:bg-gray-100'}`
          }
        >
          <img className='w-5 h-5' src={assets.order_icon} alt="Orders Icon" />
          <p className='hidden md:block'>Ongoing</p>
        </NavLink>

      </div>
    </div>
  );
};

export default Sidebar;

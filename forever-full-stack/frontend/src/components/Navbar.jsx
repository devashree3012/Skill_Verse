import React, { useContext, useState } from 'react';
import { assets } from '../assets/assets';
import { Link, NavLink } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const { setShowSearch, navigate, token, setToken } = useContext(ShopContext);

  const logout = () => {
    navigate('/login');
    localStorage.removeItem('token');
    setToken('');
  };

  return (
    <nav className='flex items-center justify-between py-5 px-6 bg-[#D6EAF8] text-[#2C3E50] shadow-md'>
      {/* Logo */}
      <Link to='/'>
        <img src={assets.logo} className='w-40 hover:scale-110 transition-transform' alt="SkillVerse Logo" />
      </Link>

      {/* Main Navigation */}
      <ul className='hidden sm:flex gap-6 text-lg'>
        <NavLink to='/' className='hover:text-[#3498DB] transition-colors'>Home</NavLink>
        <NavLink to='/gigs' className='hover:text-[#3498DB] transition-colors'>Find Gigs</NavLink>
        <NavLink to='/about' className='hover:text-[#3498DB] transition-colors'>About Us</NavLink>
        <NavLink to='/contact' className='hover:text-[#3498DB] transition-colors'>Contact</NavLink>
      </ul>

      {/* Right-side Icons */}
      <div className='flex items-center gap-6'>
        {/* Search Icon */}
        <img
          onClick={() => {
            setShowSearch(true);
            navigate('/gigs');
          }}
          src={assets.search_icon}
          className='w-6 cursor-pointer hover:scale-110 transition-transform'
          alt="Search"
        />

        {/* Profile Dropdown */}
        <div className='relative group'>
          <img
            onClick={() => (token ? null : navigate('/login'))}
            className='w-7 cursor-pointer hover:scale-110 transition-transform'
            src={assets.profile_icon}
            alt="Profile"
          />
          {token && (
            <div className='absolute hidden group-hover:flex flex-col right-0 mt-4 bg-white text-gray-700 rounded-md shadow-md w-40 py-3 px-4'>
              <p className='cursor-pointer hover:text-black' onClick={() => navigate('/profile')}>My Profile</p>
              <p className='cursor-pointer hover:text-black' onClick={() => navigate('/orders')}>My Gigs</p>
              <p className='cursor-pointer hover:text-red-500' onClick={logout}>Logout</p>
            </div>
          )}
        </div>

        {/* Mobile Menu Icon */}
        <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon}
          className='w-6 cursor-pointer sm:hidden'
          alt="Menu"
        />
      </div>

      {/* Mobile Sidebar Menu */}
      <div className={`fixed top-0 right-0 bottom-0 bg-white w-4/5 max-w-sm transition-transform ${visible ? 'translate-x-0' : 'translate-x-full'} shadow-lg`}>
        <div className='flex flex-col text-gray-700 p-5'>
          {/* Close Button */}
          <div onClick={() => setVisible(false)} className='flex items-center gap-4 cursor-pointer'>
            <img className='h-5 rotate-180' src={assets.dropdown_icon} alt="Back" />
            <p>Close</p>
          </div>

          {/* Mobile Links */}
          <NavLink onClick={() => setVisible(false)} className='py-3 border-b' to='/'>Home</NavLink>
          <NavLink onClick={() => setVisible(false)} className='py-3 border-b' to='/gigs'>Find Gigs</NavLink>
          <NavLink onClick={() => setVisible(false)} className='py-3 border-b' to='/about'>About Us</NavLink>
          <NavLink onClick={() => setVisible(false)} className='py-3' to='/contact'>Contact</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

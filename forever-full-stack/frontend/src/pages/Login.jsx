import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import axios from 'axios';
import { toast } from 'react-toastify';
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Login = () => {
  const [currentState, setCurrentState] = useState('Login');
  const { token, setToken, navigate, backendUrl } = useContext(ShopContext);
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      const endpoint = currentState === 'Sign Up' ? '/api/user/register' : '/api/user/login';
      const payload = currentState === 'Sign Up' ? { name, email, password } : { email, password };
      
      const response = await axios.post(backendUrl + endpoint, payload);
      if (response.data.success) {
        setToken(response.data.token);
        localStorage.setItem('token', response.data.token);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (token) {
      navigate('/');
    }
  }, [token]);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.5 }}
      className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-16 gap-6 text-[#2C3E50] font-[Inter]'
    >
      <div className='inline-flex items-center gap-3 mb-4 mt-12'>
        <p className='text-4xl font-bold'>{currentState}</p>
        <hr className='border-none h-[3px] w-10 bg-[#3498DB]' />
      </div>
      <form onSubmit={onSubmitHandler} className='w-full flex flex-col gap-5 bg-[#D6EAF8] p-8 rounded-2xl shadow-xl'>
        {currentState === 'Sign Up' && (
          <div className='flex items-center border border-[#3498DB] px-4 py-3 rounded-lg'>
            <FaUser className='text-[#2980B9] text-lg' />
            <input onChange={(e) => setName(e.target.value)} value={name} type='text' className='w-full px-3 text-lg outline-none bg-transparent' placeholder='Full Name' required />
          </div>
        )}
        <div className='flex items-center border border-[#3498DB] px-4 py-3 rounded-lg'>
          <FaEnvelope className='text-[#2980B9] text-lg' />
          <input onChange={(e) => setEmail(e.target.value)} value={email} type='email' className='w-full px-3 text-lg outline-none bg-transparent' placeholder='Email Address' required />
        </div>
        <div className='flex items-center border border-[#3498DB] px-4 py-3 rounded-lg'>
          <FaLock className='text-[#2980B9] text-lg' />
          <input onChange={(e) => setPassword(e.target.value)} value={password} type='password' className='w-full px-3 text-lg outline-none bg-transparent' placeholder='Password' required />
        </div>
        <div className='w-full flex justify-between text-md text-[#2980B9]'>
          <p className='cursor-pointer hover:underline'>Forgot password?</p>
          <p onClick={() => setCurrentState(currentState === 'Login' ? 'Sign Up' : 'Login')} className='cursor-pointer hover:underline'>
            {currentState === 'Login' ? 'Create account' : 'Login Here'}
          </p>
        </div>
        <motion.button 
          whileHover={{ scale: 1.07 }}
          whileTap={{ scale: 0.95 }}
          className='bg-[#3498DB] text-white text-xl font-semibold px-10 py-3 mt-5 rounded-lg shadow-lg'>
          {currentState === 'Login' ? 'Sign In' : 'Sign Up'}
        </motion.button>
      </form>
    </motion.div>
  );
};

export default Login;

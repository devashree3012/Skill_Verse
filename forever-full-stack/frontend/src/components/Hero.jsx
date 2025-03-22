import React from 'react';
import { assets } from '../assets/assets';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className='relative flex flex-col sm:flex-row items-center justify-between bg-gradient-to-r from-[#1A237E] to-[#4A90E2] text-white py-16 sm:py-24 px-6 sm:px-16 rounded-lg shadow-2xl overflow-hidden'>

      {/* Floating Glow Effect */}
      <div className="absolute inset-0 bg-white opacity-5 blur-3xl"></div>

      {/* Left Side - Text Content */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 1 }} 
        className='w-full sm:w-1/2 text-center sm:text-left relative z-10'
      >
        <h1 className='text-5xl sm:text-6xl font-extrabold leading-tight tracking-wide drop-shadow-lg'>
          Unleash Your Potential 🚀  
        </h1>
        <p className='text-lg sm:text-xl mt-4 max-w-lg leading-relaxed opacity-90'>
          Connect with top startups, showcase your skills, and get paid for what you love.  
          Your journey to success starts now!  
        </p>
        <div className='mt-8 flex justify-center sm:justify-start gap-6'>
          <motion.button 
            whileHover={{ scale: 1.1 }} 
            className='bg-[#FFD700] text-[#1A237E] font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-[#FFC300] transition-all'
          >
            Get Started
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.1 }} 
            className='border-2 border-white text-white font-semibold px-8 py-4 rounded-full hover:bg-white hover:text-[#1A237E] transition-all'
          >
            Learn More
          </motion.button>
        </div>
      </motion.div>

      {/* Right Side - Image */}
      <motion.img 
        initial={{ opacity: 0, x: 50 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 1 }} 
        className='w-full sm:w-1/2 max-w-md mt-10 sm:mt-0 relative z-10'
        src={assets.hero_img} 
        alt="SkillVerse Hero" 
      />
    </div>
  );
};

export default Hero;

import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaPaintBrush, FaBullhorn } from 'react-icons/fa';

const skills = [
  { name: "Web Development", icon: <FaCode /> },
  { name: "Graphic Design", icon: <FaPaintBrush /> },
  { name: "Digital Marketing", icon: <FaBullhorn /> }
];

const FeaturedSkills = () => {
  return (
    <div className='p-12 text-center bg-gradient-to-br from-[#1A237E] to-[#4A90E2] text-white rounded-xl shadow-2xl'>

      {/* Title with Glow Effect */}
      <motion.h2 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }} 
        className='text-5xl font-extrabold tracking-wide mb-8 drop-shadow-lg'
      >
        🌟 Master In-Demand Skills!
      </motion.h2>

      {/* Skills Grid */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
        {skills.map((skill, index) => (
          <motion.div 
            key={index}
            whileHover={{ scale: 1.1, rotate: 2 }} 
            transition={{ type: "spring", stiffness: 300 }}
            className='p-8 bg-[#FFF] text-[#1A237E] rounded-2xl shadow-lg transform hover:shadow-2xl'
          >
            <motion.div 
              whileHover={{ rotate: -10 }} 
              className='text-6xl mx-auto mb-4 text-[#FFD700]'
            >
              {skill.icon}
            </motion.div>
            <p className='text-2xl font-bold'>{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedSkills;

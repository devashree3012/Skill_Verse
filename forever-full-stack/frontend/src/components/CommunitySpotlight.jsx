import { motion } from "framer-motion";
import { FaUserCircle } from "react-icons/fa";

const members = [
  { name: "Ava", role: "Top Mentor" },
  { name: "Liam", role: "Best Freelancer" },
  { name: "Sophia", role: "Community Leader" }
];

const CommunitySpotlight = () => {
  return (
    <div className='p-12 text-center bg-gradient-to-r from-[#D6EAF8] to-[#AED6F1] text-[#1A237E] rounded-xl shadow-2xl'>

      {/* Title Animation */}
      <motion.h2 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }} 
        className='text-5xl font-extrabold tracking-wide mb-10 drop-shadow-lg'
      >
        🌟 Community Spotlight
      </motion.h2>

      <p className='text-lg max-w-3xl mx-auto mb-8 text-[#1A237E]/80'>
        Meet our most inspiring members who are making a difference!  
        Join the movement, collaborate, and shine! 💡
      </p>

      {/* Members Grid */}
      <div className='flex justify-center gap-10 flex-wrap'>
        {members.map((member, index) => (
          <motion.div 
            key={index}
            whileHover={{ scale: 1.1 }} 
            transition={{ type: "spring", stiffness: 200 }}
            className='w-40 h-40 bg-white/30 backdrop-blur-md rounded-full shadow-xl flex flex-col items-center justify-center p-4 hover:shadow-2xl transform hover:-translate-y-2 border border-white/40'
          >
            <FaUserCircle className='text-5xl text-[#1A237E] mb-2' />
            <h3 className='text-xl font-semibold'>{member.name}</h3>
            <p className='text-sm text-[#1A237E]/80'>{member.role}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CommunitySpotlight;

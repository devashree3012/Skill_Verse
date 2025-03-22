import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

const freelancers = [
  { name: "Alex", role: "Full Stack Developer" },
  { name: "Maria", role: "UI/UX Designer" },
  { name: "John", role: "Digital Marketer" }
];

const TopFreelancers = () => {
  return (
    <div className='p-12 text-center bg-gradient-to-br from-[#1A237E] to-[#4A90E2] text-white rounded-xl shadow-2xl'>

      {/* Title with Floating Effect */}
      <motion.h2 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }} 
        className='text-5xl font-extrabold tracking-wide mb-8 drop-shadow-lg'
      >
        🏆 Meet Our Top Freelancers!
      </motion.h2>

      {/* Freelancers Grid */}
      <div className='flex flex-wrap justify-center gap-10'>
        {freelancers.map((freelancer, index) => (
          <motion.div 
            key={index}
            whileHover={{ scale: 1.1, y: -5 }} 
            transition={{ type: "spring", stiffness: 200 }}
            className='relative w-48 h-48 flex flex-col items-center justify-center rounded-full bg-white/10 backdrop-blur-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-2'
          >
            {/* Floating Star Icon */}
            <motion.div 
              whileHover={{ rotate: -10 }} 
              className='absolute -top-5 right-6 text-4xl text-[#F1C40F]'
            >
              <FaStar />
            </motion.div>
            
            <p className='text-2xl font-bold'>{freelancer.name}</p>
            <p className='text-lg text-gray-200'>{freelancer.role}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TopFreelancers;

import { motion } from "framer-motion";
import { FaUserGraduate, FaBriefcase, FaMoneyBillWave } from "react-icons/fa";

const steps = [
  { icon: <FaUserGraduate />, title: "Showcase Your Skills", desc: "Create a profile and highlight your expertise." },
  { icon: <FaBriefcase />, title: "Find Gigs", desc: "Explore and apply for freelance opportunities." },
  { icon: <FaMoneyBillWave />, title: "Earn & Grow", desc: "Work with startups, build experience, and get paid." }
];

const HowItWorks = () => {
  return (
    <div className='p-12 text-center bg-gradient-to-r from-[#4A90E2] to-[#1A237E] text-white rounded-xl shadow-2xl'>

      {/* Title Animation */}
      <motion.h2 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }} 
        className='text-5xl font-extrabold tracking-wide mb-10 drop-shadow-lg'
      >
        🔍 How It Works
      </motion.h2>

      {/* Steps Grid */}
      <div className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto'>
        {steps.map((step, index) => (
          <motion.div 
            key={index}
            whileHover={{ scale: 1.05 }} 
            transition={{ type: "spring", stiffness: 200 }}
            className='p-6 rounded-2xl bg-white/10 backdrop-blur-lg shadow-lg flex flex-col items-center text-center hover:shadow-2xl transform hover:-translate-y-2'
          >
            {/* Animated Icon */}
            <motion.div 
              whileHover={{ rotate: 10 }} 
              className='text-5xl text-[#F1C40F] mb-4'
            >
              {step.icon}
            </motion.div>

            <h3 className='text-2xl font-semibold mb-2'>{step.title}</h3>
            <p className='text-lg text-gray-200'>{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;

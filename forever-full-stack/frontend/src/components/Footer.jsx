import React from "react";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div className="bg-gradient-to-br from-blue-800 to-[#0D47A1] text-white p-12 relative overflow-hidden">
      
      {/* Floating Light Effect */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-72 h-72 bg-blue-400 opacity-20 rounded-full blur-3xl"></div>

      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-lg relative z-10">
        
        {/* Logo + Intro Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
          className="p-8 backdrop-blur-md bg-white/10 rounded-lg shadow-lg"
        >
          <img 
            src={assets.logo} 
            className="mb-6 w-40 transition-transform transform hover:scale-110 drop-shadow-lg" 
            alt="SkillVerse Logo" 
          />
          <p className="w-full md:w-3/4 text-white text-lg leading-relaxed">
            SkillVerse is your gateway to connecting talent with opportunity. 
            We empower students to showcase their skills and collaborate with startups on exciting projects.
          </p>
        </motion.div>

        {/* Platform Links */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.2, duration: 0.8 }}
          className="p-8 backdrop-blur-md bg-white/10 rounded-lg shadow-lg"
        >
          <p className="text-2xl font-bold mb-6 text-blue-200 shadow-blue-300">
            PLATFORM
          </p>
          <ul className="flex flex-col gap-3 text-white">
            {["Home", "About Us", "Find Gigs", "Privacy Policy"].map((item, index) => (
              <li 
                key={index} 
                className="hover:text-blue-300 cursor-pointer transition-all duration-300 transform hover:translate-x-2 text-lg"
              >
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Contact Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.4, duration: 0.8 }}
          className="p-8 backdrop-blur-md bg-white/10 rounded-lg shadow-lg"
        >
          <p className="text-2xl font-bold mb-6 text-blue-200 shadow-blue-300">
            CONTACT US
          </p>
          <ul className="flex flex-col gap-3 text-white">
            <li className="hover:text-blue-300 cursor-pointer transition-all duration-300 transform hover:translate-x-2 text-lg">
              +91-9542109924
            </li>
            <li className="hover:text-blue-300 cursor-pointer transition-all duration-300 transform hover:translate-x-2 text-lg">
              support@skillverse.com
            </li>
          </ul>
        </motion.div>
      </div>

      {/* Footer Bottom */}
      <div className="relative z-10">
        <hr className="border-blue-300 opacity-50" />
        <p className="py-5 text-lg text-center text-blue-200 hover:text-white transition-colors">
          &copy; 2024 SkillVerse - Empowering Talent, Connecting Opportunities.
        </p>
      </div>
    </div>
  );
};

export default Footer;

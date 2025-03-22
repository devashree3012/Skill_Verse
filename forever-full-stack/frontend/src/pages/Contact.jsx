import React from "react";
import { motion } from "framer-motion";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";

const Contact = () => {
  return (
    <div className="relative bg-gradient-to-b from-[#8dc6ff] to-[#6fa8dc] text-gray-900 min-h-screen py-16 px-8 md:px-24 overflow-hidden">
      
      {/* Floating Animation Blobs */}
      <div className="absolute top-[-80px] left-[-100px] w-[250px] h-[250px] bg-blue-400 opacity-30 rounded-full animate-blob"></div>
      <div className="absolute bottom-[-80px] right-[-100px] w-[200px] h-[200px] bg-blue-500 opacity-40 rounded-full animate-blob"></div>

      {/* Contact Us Title */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center mb-10"
      >
        <p className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-gray-500 text-center">
          📞 CONTACT US
        </p>
      </motion.div>

      {/* Contact Details */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="flex flex-col md:flex-row gap-12 items-center"
      >
        {/* Image Section */}
        <img
          className="w-full md:max-w-[500px] rounded-lg shadow-lg border-4 border-gray-400 transform transition-transform hover:scale-105"
          src={assets.contact_img}
          alt="Contact Us"
        />

        {/* Contact Info */}
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-2xl leading-loose text-gray-800">
          <p className="font-extrabold tracking-wide text-gray-900 text-3xl">📍 Our Store</p>
          <p className="text-gray-700">54709 Willms Station <br /> Suite 350, Washington, USA</p>

          <p className="font-extrabold tracking-wide text-gray-900 text-3xl">☎️ Get in Touch</p>
          <p className="text-gray-700">
            Tel: <span className="font-semibold text-gray-900">(415) 555-0132</span> <br />
            Email: <span className="font-semibold text-gray-900">admin@forever.com</span>
          </p>

          <p className="font-extrabold tracking-wide text-gray-900 text-3xl">🚀 Careers at Forever</p>
          <p className="text-gray-700">Learn more about our teams and job openings.</p>

          {/* Button with Animation */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#76b6ff] px-8 py-4 text-xl font-semibold rounded-lg shadow-md hover:bg-blue-700 hover:text-white transition-all duration-500"
          >
            Explore Jobs 🔍
          </motion.button>
        </div>
      </motion.div>

      {/* Newsletter Section */}
      <NewsletterBox />

      {/* Animation Keyframes */}
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: scale(1);
            border-radius: 40% 60% 60% 40%;
          }
          50% {
            transform: scale(1.1);
            border-radius: 60% 40% 40% 60%;
          }
          100% {
            transform: scale(1);
            border-radius: 40% 60% 60% 40%;
          }
        }
        .animate-blob {
          animation: blob 8s infinite ease-in-out alternate;
          filter: blur(60px);
          position: absolute;
          z-index: -1;
        }
      `}</style>

    </div>
  );
};

export default Contact;

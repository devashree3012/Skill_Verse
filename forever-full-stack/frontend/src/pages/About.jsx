import React from 'react';
import { motion } from 'framer-motion';
import { assets } from '../assets/assets';
import NewsletterBox from '../components/NewsletterBox';

const About = () => {
  return (
    <div className="relative bg-gradient-to-b from-[#8dc6ff] to-[#6fa8dc] text-gray-900 min-h-screen py-16 px-8 md:px-24 overflow-hidden font-[Poppins]">
      
      {/* Floating Blobs */}
      <div className="absolute top-[-100px] left-[-150px] w-[300px] h-[300px] bg-blue-400 opacity-30 rounded-full animate-blob"></div>
      <div className="absolute bottom-[-100px] right-[-150px] w-[250px] h-[250px] bg-blue-500 opacity-40 rounded-full animate-blob"></div>
      
      {/* About Us Title */}
      <motion.div 
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}
        className="text-center mb-10"
      >
        <p className="text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-400 text-center drop-shadow-lg">
          ABOUT US
        </p>
      </motion.div>

      {/* About Content */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 1 }}
        className="my-16 flex flex-col md:flex-row gap-12 items-center"
      >
        <img 
          className="w-full md:max-w-[500px] rounded-lg shadow-lg border-4 border-gray-500 transform transition-transform hover:scale-110 duration-300"
          src={assets.about_img}
          alt="About Us"
        />
        <div className="flex flex-col justify-center gap-8 md:w-2/4 text-2xl leading-loose text-gray-800">
          <p>
            <span className="font-extrabold tracking-wide text-gray-900 text-4xl">SkillVerse</span> connects students with startups, enabling them to <span className="font-extrabold tracking-wide text-4xl">monetize their skills</span> and gain real-world experience.
          </p>
          <p>
            We empower students to <span className="font-extrabold tracking-wide text-4xl">learn, earn, and grow</span>, while giving startups access to skilled talent.
          </p>
          <motion.p 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 0.5 }}
            className="text-5xl font-extrabold tracking-wider text-gray-900"
          >Our Mission</motion.p>
          <p>
            To <span className="font-extrabold tracking-wide text-4xl">bridge the gap</span> between <span className="font-extrabold tracking-wide text-4xl">skills and opportunities</span>, empowering students and businesses to succeed together.
          </p>
        </div>
      </motion.div>

      {/* Why Choose Us Section */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}
        className="text-5xl text-center py-10 font-extrabold tracking-wider text-gray-900"
      >
        <p className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
          WHY CHOOSE US
        </p>
      </motion.div>

      {/* Feature Cards */}
      <div className="flex flex-col md:flex-row text-xl gap-6">
        {[ 
          { title: '✔️ Quality Assurance', text: 'We carefully verify each project and skill listing to ensure quality and authenticity.' },
          { title: '⚡ Seamless Experience', text: 'A smooth, hassle-free platform to explore, apply, and get hired with confidence.' },
          { title: '💡 Career Growth', text: 'SkillVerse helps students scale their careers, whether beginner or expert.' }
        ].map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: index * 0.3 }}
            className="bg-[#76b6ff] p-8 rounded-xl shadow-md border-2 border-gray-500 hover:scale-105 transition-transform"
          >
            <p className="text-3xl font-extrabold tracking-wide text-gray-900">{feature.title}</p>
            <p className="text-gray-800 mt-2">{feature.text}</p>
          </motion.div>
        ))}
      </div>

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
          filter: blur(80px);
          position: absolute;
          z-index: -1;
        }
      `}</style>

    </div>
  );
};

export default About;
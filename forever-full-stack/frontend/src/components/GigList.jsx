import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const GigList = () => {
  const [gigs, setGigs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGigs = async () => {
      try {
        const token = "YOUR_AUTH_TOKEN"; // Replace with actual token logic
        const response = await fetch("http://localhost:4000/api/gigs/list", {
          headers: { Authorization: `Bearer ${token}` },
        });

        const data = await response.json();
        if (data.success) {
          setGigs(data.gigs);
        } else {
          console.error("Failed to fetch gigs:", data.message);
        }
      } catch (error) {
        console.error("Error fetching gigs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGigs();
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#8dc6ff] to-[#6fa8dc] text-white py-16 px-8 md:px-24 overflow-hidden">
      {/* Floating Blobs */}
      <div className="absolute top-[-100px] left-[-150px] w-[250px] h-[250px] bg-blue-300 opacity-50 rounded-full animate-blob"></div>
      <div className="absolute bottom-[-100px] right-[-150px] w-[200px] h-[200px] bg-blue-500 opacity-40 rounded-full animate-blob"></div>

      {/* Title with Fun Animation */}
      <motion.h1
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-6xl font-extrabold text-center mb-10 tracking-wide"
      >
       <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-blue-500">
        🚀 Explore Gigs
      </span>

      </motion.h1>

      {/* Loading Animation */}
      {loading ? (
        <div className="flex justify-center items-center h-32">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1 }}
            className="w-12 h-12 border-4 border-white border-t-transparent rounded-full"
          ></motion.div>
        </div>
      ) : gigs.length === 0 ? (
        <p className="text-center text-2xl text-gray-200">No gigs available.</p>
      ) : (
        <div className="flex flex-col items-center space-y-6">
          {gigs.map((gig, index) => (
            <motion.div
              key={gig._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="w-full max-w-xl bg-[#e3f2fd] text-gray-900 p-6 rounded-xl shadow-xl border border-gray-300 hover:shadow-2xl transition-all"
            >
              <h2 className="text-2xl font-bold flex items-center gap-2">
                📌 {gig.title}
              </h2>
              <p className="text-lg text-gray-700 mt-2">{gig.description}</p>
              <p className="text-lg text-blue-500 font-semibold mt-2 flex items-center">
                💰 Stipend: ${gig.stipend}
              </p>
            </motion.div>
          ))}
        </div>
      )}

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
          filter: blur(70px);
          position: absolute;
          z-index: -1;
        }
      `}</style>
    </div>
  );
};

export default GigList;

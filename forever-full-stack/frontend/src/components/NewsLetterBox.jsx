import React, { useState } from "react";

const NewsletterBox = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Function to handle email validation
  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  // Function to handle form submission
  const handleSubscribe = async () => {
    if (!validateEmail(email)) {
      setMessage("❌ Please enter a valid email address.");
      return;
    }

    try {
      // Simulating API request (replace with actual API call)
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setMessage("✅ Subscribed successfully! Check your inbox. 📩");
      setEmail(""); // Clear input field
    } catch (error) {
      setMessage("❌ Subscription failed. Try again later.");
    }
  };

  return (
    <div className="p-10 text-center bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-xl shadow-lg">
      <h2 className="text-3xl font-bold mb-4">📩 Stay Updated!</h2>
      <p className="text-lg mb-4">
        Subscribe to our newsletter for the latest gigs, tips, and community updates.
      </p>
      
      <div className="flex justify-center">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-3 rounded-l-lg text-black outline-none w-64"
        />
        <button
          onClick={handleSubscribe}
          className="bg-[#2C3E50] px-5 py-3 rounded-r-lg hover:bg-[#1B2737] transition-all"
        >
          Subscribe
        </button>
      </div>

      {message && <p className="mt-4 text-lg">{message}</p>}
    </div>
  );
};

export default NewsletterBox;

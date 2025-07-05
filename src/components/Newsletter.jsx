import React from 'react';

const Newsletter = () => (
  <section className="bg-[#151e2c] py-20 flex items-center justify-center min-h-[350px]">
    <div className="relative w-full max-w-2xl mx-auto px-6">
      {/* Decorative Icon */}
      <div className="flex justify-center -mb-6 z-10 relative">
        <div className="bg-white/10 rounded-full p-4 shadow-lg">
          <svg className="w-10 h-10 text-white opacity-80" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79V6.5A2.5 2.5 0 0 0 18.5 4h-13A2.5 2.5 0 0 0 3 6.5v11A2.5 2.5 0 0 0 5.5 20h13a2.5 2.5 0 0 0 2.5-2.5v-1.29a2 2 0 0 0-.79-1.58l-7-5.25a2 2 0 0 0-2.42 0l-7 5.25A2 2 0 0 0 3 16.21" />
          </svg>
        </div>
      </div>
      {/* Card */}
      <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-10 pt-16 text-center border border-white/20">
        <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-3 text-white">Stay Inspired</h2>
        <p className="mb-8 text-gray-200 text-base md:text-lg">Join our newsletter and be the first to discover new destinations, exclusive offers, and travel inspiration.</p>
        <form className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto mb-2">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:w-auto flex-1 px-5 py-3 rounded-full text-black focus:outline-none shadow-md border border-white/30"
            required
          />
          <button type="submit" className="px-8 py-3 bg-gradient-to-r from-blue-400 to-blue-600 text-white rounded-full font-semibold shadow-md hover:from-blue-500 hover:to-blue-700 transition">Subscribe</button>
        </form>
        <p className="text-xs text-gray-300 mt-4">By subscribing, you agree to our Privacy Policy and consent to receive updates.</p>
      </div>
    </div>
  </section>
);

export default Newsletter; 
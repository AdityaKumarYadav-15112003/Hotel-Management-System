import React from 'react'
import { assets, roomsDummyData } from '../assets/assets';
import HotelCard from './HotelCard';
import Offers from './Offers';
import Testimonials from './Testimonials';
import Newsletter from './Newsletter';

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <div className='flex flex-col items-start justify-center px-6 md:px-16 lg:px-24 xl:px-32 text-white bg-no-repeat bg-cover bg-center h-screen' style={{backgroundImage: `url(${assets.heroImage})`}}>
        <p className='bg-[#49B9FF]/50 px-3.5 py-1 rounded-full mt-20'>The Ultimate Hotel Experience</p>
        <h1 className='font-playfair text-2xl md:text-5xl md:text-[56px] md:leading-[56px] font-bold md:font-extrabold max-w-xl mt-4'>Discover Your Perfect Getaway Destination</h1>
        <p className='max-w-130 mt-2 text-sm md:text-base mb-8'>Unparalleled luxury and comfort await at the world's most exclusive hotels and resorts. Start your journey today with EliteStay.</p>
        <form className="bg-white/60 border border-gray-100 shadow-2xl rounded-2xl px-8 py-5 flex flex-col md:flex-row items-center gap-4 max-w-3xl w-full mb-0 backdrop-blur-lg">
          {/* Destination */}
          <div className="flex flex-col min-w-0 w-40">
            <label htmlFor="destinationInput" className="text-xs font-semibold mb-1 text-gray-700">Destination</label>
            <div className="relative flex items-center">
              <span className="absolute left-3 text-gray-400">
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 10h16M8 14h8m-4-7V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z" />
                </svg>
              </span>
              <input list='destinations' id="destinationInput" type="text" className="rounded-lg border border-gray-200 pl-10 pr-3 py-2 text-sm outline-none w-full text-gray-800 placeholder:text-gray-400 focus:ring-2 focus:ring-blue-200 transition" placeholder="Type here" required />
            </div>
          </div>
          {/* Check in */}
          <div className="flex flex-col min-w-0 w-36">
            <label htmlFor="checkIn" className="text-xs font-semibold mb-1 text-gray-700">Check in</label>
            <div className="relative flex items-center">
              <span className="absolute left-3 text-gray-400">
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 10h16M8 14h8m-4-7V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z" />
                </svg>
              </span>
              <input id="checkIn" type="text" placeholder="mm/dd/yyyy" className="rounded-lg border border-gray-200 pl-10 pr-3 py-2 text-sm outline-none w-full text-gray-800 bg-white/90 placeholder:text-gray-700 focus:ring-2 focus:ring-blue-200 transition" />
            </div>
          </div>
          {/* Check out */}
          <div className="flex flex-col min-w-0 w-36">
            <label htmlFor="checkOut" className="text-xs font-semibold mb-1 text-gray-700">Check out</label>
            <div className="relative flex items-center">
              <span className="absolute left-3 text-gray-400">
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 10h16M8 14h8m-4-7V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z" />
                </svg>
              </span>
              <input id="checkOut" type="text" placeholder="mm/dd/yyyy" className="rounded-lg border border-gray-200 pl-10 pr-3 py-2 text-sm outline-none w-full text-gray-800 bg-white/90 placeholder:text-gray-700 focus:ring-2 focus:ring-blue-200 transition" />
            </div>
          </div>
          {/* Guests */}
          <div className="flex flex-col min-w-0 w-24">
            <label htmlFor="guests" className="text-xs font-semibold mb-1 text-gray-700">Guests</label>
            <div className="relative flex items-center">
              <span className="absolute left-3 text-gray-400">
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="2" />
                  <path stroke="currentColor" strokeWidth="2" d="M4 20c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                </svg>
              </span>
              <input min={1} max={4} id="guests" type="number" className="rounded-lg border border-gray-200 pl-10 pr-3 py-2 text-sm outline-none w-full text-gray-800 placeholder:text-gray-400 focus:ring-2 focus:ring-blue-200 transition" placeholder="0" />
            </div>
          </div>
          {/* Search Button */}
          <button className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 py-3 px-6 text-white font-semibold shadow-lg hover:from-blue-600 hover:to-indigo-700 transition-all focus:ring-2 focus:ring-blue-200 outline-none mt-4 md:mt-6 min-w-[120px]" type="submit">
            <svg className="w-5 h-5 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" >
              <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" />
            </svg>
            <span>Search</span>
          </button>
        </form>
      </div>

      {/* Featured Hotels Section */}
      <section className="bg-[#f6fbff] py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-center mb-2">Featured Hotels</h2>
          <p className="text-center text-gray-500 mb-8">Discover our handpicked selection of exceptional properties around the world, offering unparalleled luxury and unforgettable experiences.</p>
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            {roomsDummyData.map((room, idx) => (
              <HotelCard key={room._id} room={room} index={idx} />
            ))}
          </div>
          <div className="flex justify-center">
            <button className="px-6 py-2 border border-gray-300 rounded hover:bg-gray-100 transition-all">View All Hotels</button>
          </div>
        </div>
      </section>

      {/* Exclusive Offers Section */}
      <Offers />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Newsletter/Stay Inspired Section */}
      <Newsletter />
    </>
  )
}

export default Home
import React from 'react'
import { assets } from '../assets/assets';
import FeaturedDestination from './FeaturedDestination';

const Home = () => {
  return (
    <>
      <div className='flex flex-col items-start justify-center px-6 md:px-16 lg:px-24 xl:px-32 text-white bg-no-repeat bg-cover bg-center h-screen' style={{backgroundImage: `url(${assets.heroImage})`}}>
        <p className='bg-[#49B9FF]/50 px-3.5 py-1 rounded-full mt-20'>The Ultimate Hotel Experience</p>
        <h1 className='font-playfair text-2xl md:text-5xl md:text-[56px] md:leading-[56px] font-bold md:font-extrabold max-w-xl mt-4'>Discover Your Perfect Gateway Destination</h1>
        <p className='max-w-130 mt-2 text-sm md:text-base mb-8'>Unparalleled luxury and comfort await at the world's most exclusive hotels and resorts. Start your journey today.</p>
        <form className="bg-white/80 border border-gray-200 shadow-lg rounded-xl px-4 py-2 inline-flex flex-col md:flex-row flex-wrap md:flex-nowrap items-center gap-3 max-w-2xl w-auto mb-0 overflow-x-auto min-w-0">
          {/* Destination */}
          <div className="flex flex-col min-w-0">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" >
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 10h16M8 14h8m-4-7V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z" />
              </svg>
              <label htmlFor="destinationInput" className="text-xs text-black">Destination</label>
            </div>
            <input list='destinations' id="destinationInput" type="text" className="rounded border border-gray-200 px-2 py-1 mt-1 text-sm outline-none w-24 min-w-0 text-black placeholder:text-gray-400" placeholder="Type here" required />
          </div>
          {/* Check in */}
          <div className="flex flex-col min-w-0">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" >
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 10h16M8 14h8m-4-7V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z" />
              </svg>
              <label htmlFor="checkIn" className="text-xs text-black">Check in</label>
            </div>
            <input id="checkIn" type="date" className="rounded border border-gray-200 px-2 py-1 mt-1 text-sm outline-none w-24 min-w-0 text-black" />
          </div>
          {/* Check out */}
          <div className="flex flex-col min-w-0">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" >
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 10h16M8 14h8m-4-7V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z" />
              </svg>
              <label htmlFor="checkOut" className="text-xs text-black">Check out</label>
            </div>
            <input id="checkOut" type="date" className="rounded border border-gray-200 px-2 py-1 mt-1 text-sm outline-none w-24 min-w-0 text-black" />
          </div>
          {/* Guests */}
          <div className="flex flex-col items-start min-w-0">
            <label htmlFor="guests" className="text-xs text-black">Guests</label>
            <input min={1} max={4} id="guests" type="number" className="rounded border border-gray-200 px-2 py-1 mt-1 text-sm outline-none w-16 min-w-0 text-black" placeholder="0" />
          </div>
          {/* Search Button */}
          <button className="flex items-center justify-center gap-1 rounded-md bg-black py-2 px-3 text-white my-auto cursor-pointer max-md:w-full max-md:py-1 shrink-0 min-w-0" type="submit">
            <svg className="w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" >
              <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" />
            </svg>
            <span>Search</span>
          </button>
        </form>
      </div>
      <FeaturedDestination />
    </>
  )
}

export default Home
import React from 'react'
import { useState } from 'react';
import { bandaids, hamburger, stats } from '../assets';

import '../index.css';

const Navbar = () => {
  const[toggle, setToggle] = useState(false);

  const handleClick = (link) => {
    // Close the drop-down and navigate to the link
    setToggle(false);
    window.open(link, '_blank');
  };

  return (
    <nav className='w-full flex py-6 sm:px-16 px-6 justify-between items-center sm:mb-[8px] mb-0'>
      <h2 className='font-dmMono'>ashton's <br className='sm:hidden block'/> run log</h2>

      <img src={stats} alt="" className='sm:block hidden h-auto w-[70px] cursor-pointer'/>
      
      <img src={toggle ? bandaids : hamburger} alt="" className={`sm:hidden block h-auto w-[100px] cursor-pointer z-50`} onClick={() => setToggle((prev) => (!prev))} style={toggle ? { position: 'fixed', top: '1.5rem', right: '1.5rem' } : {}}/>

      {toggle && (
        <div className="fixed inset-0 flex items-center justify-center bg-white z-40">
          <ul className="text-center">
            <li onClick={() => handleClick('https://example.com/about')} className='font-dmMono text-lightgrey cursor-pointer text-2xl py-4'>about</li>
            <li onClick={() => handleClick('https://example.com/strava')} className='font-dmMono text-lightgrey cursor-pointer text-2xl py-4'>strava</li>
            <li onClick={() => handleClick('https://example.com/run-log')} className='font-dmMono text-lightgrey cursor-pointer text-2xl py-4'>run log</li>
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar
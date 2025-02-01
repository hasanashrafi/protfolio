// Header.js
import Link from 'next/link';
import React from 'react';


function Header() {
  return (
    <div className="w-full text-indigo-900  p-4 flex justify-center items-center">
    <Link href="/">
      <p className="font-bold text-2xl text-orange-500 mr-4">HsN.DeV</p>
    </Link> 
      
      <div className='flex items-center gap-8 mx-4 font-semibold'>
        <Link href="/projects" className="block  hover:text-gray-200 transition duration-300">
          Projects
        </Link> 
        <Link href="/skills" className="block  hover:text-gray-200 transition duration-300">
          Skills
        </Link> 
        <Link href="/about-me" className="block  hover:text-gray-200 transition duration-300">
          About Me
        </Link> 
        <Link href="/contact-me" className="block  hover:text-gray-200 transition duration-300">
          Contact Me
        </Link> 
      
      </div>
    </div>
  );
}

export default Header;
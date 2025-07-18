import React from 'react';
import { FaLinkedinIn, FaBehance, FaTwitter } from 'react-icons/fa';

const Header = () => {
  return (
    <header className=" top-0 bg-black px-5 overflow-x-auto">
      <div className='relative mx-auto max-w-full lg:max-w-4xl xl:max-w-6xl '>
        <div className="header-bg-overlay absolute md:left-[-20px] md:right-[-20px] lg:left-[-50px] lg:right-[-50px] py-10 bg-zinc-900 rounded-md"></div>
        <div className="relative z-1 flex items-center justify-between py-8 shadow-md">
        <ul className="flex items-center gap-8 lg:gap-16 font-mono text-sm text-gray-400">
          <li>
            <a href="#" className="hover:text-white">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-white">
              Case Studies
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-white">
              Testimonials
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-white">
              Recent work
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-white">
              Get In Touch
            </a>
          </li>
        </ul>
        <div className="flex items-center space-x-4 text-lg text-gray-400">
          <a href="#" className="hover:text-white">
            <FaLinkedinIn />
          </a>
          <a href="#" className="hover:text-white">
            <FaBehance />
          </a>
          <a href="#" className="hover:text-white">
            <FaTwitter />
          </a>
        </div>
      </div>
      </div>
      
    </header>
  );
};

export default Header;

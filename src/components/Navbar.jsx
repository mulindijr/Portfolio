import React, { useState } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenu, setMobileMenu] = useState(false);

  const handleSetActive = (to) => {
    setActiveSection(to);
  };

  const toggleMenu = () => {
    setMobileMenu(!mobileMenu)
  }

  return (
    <div className='flex justify-between items-center p-4 mx-4 sm:mx-44 sticky top-0 z-50 bg-[#161513]'>
      <h1 className='cursor-pointer text-2xl sm:text-4xl font-semibold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent'>
        <Link to="home" smooth={true} duration={1500} spy={true} onSetActive={() => handleSetActive('home')}>
          Mulindi Jr.
        </Link>
      </h1>

      {/* Mobile: Connect With Me Button */}
      <div className='sm:hidden'>
        <Link to="contact" smooth={true} duration={1500} spy={true} offset={-100}>
          <button className="py-2 px-4 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 hover:bg-gradient-to-l hover:from-red-500 hover:to-green-500 transition text-white text-sm">
            Connect With Me
          </button>
        </Link>
      </div>

      <div className='sm:hidden'>
        <button onClick={toggleMenu} className='text-white'>
          {mobileMenu ? 'x' : '☰'}
        </button>
      </div>

      <ul className= {`${mobileMenu ? 'flex' : 'hidden' } flex flex-col sm:flex-row sm:space-x-10 space-y-4 sm:space-y-0 text-[20px]'`}>
        <li className={`cursor-pointer ${activeSection === 'home' ? 'text-pink-500' : 'text-white'}`}>
          <Link to="home" smooth={true} duration={1500} spy={true} onSetActive={() => handleSetActive('home')}>
            Home
          </Link>
        </li>
        <li className={`cursor-pointer ${activeSection === 'about' ? 'text-pink-500' : 'text-white'}`}>
          <Link to="about" smooth={true} duration={1500} spy={true} offset={-100} onSetActive={() => handleSetActive('about')}>
            About
          </Link>
        </li>
        <li className={`cursor-pointer ${activeSection === 'services' ? 'text-pink-500' : 'text-white'}`}>
          <Link to="services" smooth={true} duration={1500} spy={true} offset={-100} onSetActive={() => handleSetActive('services')}>
            Services
          </Link>
        </li>
        <li className={`cursor-pointer ${activeSection === 'portfolio' ? 'text-pink-500' : 'text-white'}`}>
          <Link to="portfolio" smooth={true} duration={1500} spy={true} offset={-100} onSetActive={() => handleSetActive('portfolio')}>
            Portfolio
          </Link>
        </li>
        <li className={`cursor-pointer ${activeSection === 'contact' ? 'text-pink-500' : 'text-white'}`}>
          <Link to="contact" smooth={true} duration={1500} spy={true} offset={-100} onSetActive={() => handleSetActive('contact')}>
            Contact
          </Link>
        </li>
      </ul>
      <Link to="contact" smooth={true} duration={1500} spy={true} offset={-100}>
        <button className="py-3 px-6 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 hover:bg-gradient-to-l hover:from-red-500 hover:to-green-500 transition text-white text-lg">
          Connect With Me
        </button>
      </Link>
    </div>
  );
};

export default Navbar;

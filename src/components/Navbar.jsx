import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';

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

      <div className='flex items-center space-x-2'>
        {/* Mobile: Connect With Me Button */}
        <div className='sm:hidden'>
          <Link to="contact" smooth={true} duration={1500} spy={true} offset={-100}>
            <button className="py-2 px-4 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 hover:bg-gradient-to-l hover:from-red-500 hover:to-green-500 transition text-white text-sm">
              Connect With Me
            </button>
          </Link>
        </div>

        <div className='sm:hidden'>
          <button onClick={toggleMenu} className='text-white text-2xl'>
            {mobileMenu ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      <div className="relative">
        <ul className= {`${mobileMenu ? 'flex' : 'hidden' } absolute right-0 top-8 bg-[#161513] pt-2 px-20 h-screen sm:h-auto sm:pt-0 sm:px-0 sm:relative sm:top-0 sm:right-0 sm:bg-transparent sm:flex flex-col sm:flex-row sm:space-x-10 space-y-4 sm:space-y-0 text-[20px]`}>
          <li className={`cursor-pointer ${activeSection === 'home' ? 'text-pink-500' : 'text-white'}`}>
            <Link to="home" smooth={true} duration={1500} spy={true} onSetActive={() => handleSetActive('home')} onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li className={`cursor-pointer ${activeSection === 'about' ? 'text-pink-500' : 'text-white'}`}>
            <Link to="about" smooth={true} duration={1500} spy={true} offset={-100} onSetActive={() => handleSetActive('about')} onClick={toggleMenu}>
              About
            </Link>
          </li>
          <li className={`cursor-pointer ${activeSection === 'services' ? 'text-pink-500' : 'text-white'}`}>
            <Link to="services" smooth={true} duration={1500} spy={true} offset={-100} onSetActive={() => handleSetActive('services')} onClick={toggleMenu}>
              Services
            </Link>
          </li>
          <li className={`cursor-pointer ${activeSection === 'portfolio' ? 'text-pink-500' : 'text-white'}`}>
            <Link to="portfolio" smooth={true} duration={1500} spy={true} offset={-100} onSetActive={() => handleSetActive('portfolio')} onClick={toggleMenu}>
              Portfolio
            </Link>
          </li>
          <li className={`cursor-pointer ${activeSection === 'contact' ? 'text-pink-500' : 'text-white'}`}>
            <Link to="contact" smooth={true} duration={1500} spy={true} offset={-100} onSetActive={() => handleSetActive('contact')} onClick={toggleMenu}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
      {/* Desktop: Connect With Me Button */}
      <div className='hidden sm:block'>
        <Link to="contact" smooth={true} duration={1500} spy={true} offset={-100}>
          <button className="py-3 px-6 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 hover:bg-gradient-to-l hover:from-red-500 hover:to-green-500 transition text-white text-lg">
            Connect With Me
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
